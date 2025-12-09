import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import "../css/main.css";
import api from "../api/client";

const AdminProductsManagementPage = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);

  const fetchProducts = () => {
    setLoading(true);
    setError(null);

    api.get("/products")
      .then((res) => {
        setProductList(res.data || []);
      })
      .catch((err) => {
        console.error(err);
        const msg =
          err.response?.data?.message || "Failed to load products";
        setError(msg);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addItem = () => {
    navigate("/admin/products/add");
  };

  const removeItem = async (id) => {
    if (!window.confirm("Remove this product?")) return;
    try {
      await api.delete(`/products/${id}`);
      setProductList((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to remove product");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  };

  return (
    <>
      <AdminNavbar onLogout={handleLogout} />
      <section
        className="admin-products-management"
        style={{ marginTop: "80px", marginLeft: "20px", marginRight: "20px" }}
      >
        <div className="container">
          <button
            className="btn btn-outline"
            onClick={() => navigate("/admin")}
            style={{ marginBottom: "20px" }}
          >
            ← Back to Dashboard
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h1 style={{ margin: 0 }}>Products Management</h1>

            <button className="btn add-btn" onClick={addItem}>
              Add Item
            </button>
          </div>

          {loading && <div>Loading products...</div>}
          {error && <div style={{ color: "red" }}>{error}</div>}

          {!loading && !error && (
            <table className="products-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.description}</td>
                    <td>
                      {product.image && (
                        <img
                          src={
                            product.image.startsWith("http")
                              ? product.image
                              : `/storage/${product.image}`
                          }
                          alt={product.name}
                          style={{ width: "50px", height: "50px", objectFit: "cover" }}
                        />
                      )}
                    </td>
                    <td
                      style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        className="btn btn-primary action-btn"
                        onClick={() =>
                          navigate(`/admin/products/edit/${product.id}`)
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline"
                        onClick={() => removeItem(product.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </>
  );
};

export default AdminProductsManagementPage;
