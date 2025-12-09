import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import "../css/main.css";
import api from "../api/client";

const AdminEditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct]         = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    average_weekly_sales: "",
    lead_time: "",
    image: null, // new file
  });
  const [currentImage, setCurrentImage] = useState(null);
  const [loading, setLoading]         = useState(true);
  const [saving, setSaving]           = useState(false);
  const [error, setError]             = useState(null);

  // Load product from backend
  useEffect(() => {
    setLoading(true);
    setError(null);

    api.get(`/products/${id}`)
      .then((res) => {
        const p = res.data;
        setProduct(p);
        setEditedProduct({
          name: p.name || "",
          price: p.price != null ? p.price : "",
          description: p.description || "",
          stock: p.stock != null ? p.stock : "",
          average_weekly_sales:
            p.average_weekly_sales != null ? p.average_weekly_sales : "",
          lead_time: p.lead_time != null ? p.lead_time : "",
          image: null,
        });
        setCurrentImage(p.image || null);
      })
      .catch((err) => {
        console.error(err);
        const msg =
          err.response?.data?.message || "Failed to load product";
        setError(msg);
        // if not found, go back to list
        navigate("/admin/products");
      })
      .finally(() => setLoading(false));
  }, [id, navigate]);

  const handleInputChange = (field, value) => {
    setEditedProduct((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    setEditedProduct((prev) => ({ ...prev, image: file }));
  };

  const saveEdit = async () => {
    setSaving(true);
    setError(null);

    const data = new FormData();
    if (editedProduct.name !== "") data.append("name", editedProduct.name);
    if (editedProduct.price !== "") data.append("price", editedProduct.price);
    if (editedProduct.description !== "")
      data.append("description", editedProduct.description);
    if (editedProduct.stock !== "")
      data.append("stock", editedProduct.stock);
    if (editedProduct.average_weekly_sales !== "")
      data.append(
        "average_weekly_sales",
        editedProduct.average_weekly_sales
      );
    if (editedProduct.lead_time !== "")
      data.append("lead_time", editedProduct.lead_time);
    if (editedProduct.image)
      data.append("image", editedProduct.image);

    try {
      await api.post(`/products/${id}?_method=PUT`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product updated successfully!");
      navigate("/admin/products");
    } catch (err) {
      console.error(err);
      const msg =
        err.response?.data?.message || "Failed to update product";
      setError(msg);
    } finally {
      setSaving(false);
    }
  };

  const cancelEdit = () => {
    navigate("/admin/products");
  };

  if (loading || !product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AdminNavbar />
      <section
        className="admin-edit-product"
        style={{ marginTop: "80px", marginLeft: "20px", marginRight: "20px" }}
      >
        <div className="container">
          <button
            className="btn btn-outline"
            onClick={() => navigate("/admin/products")}
            style={{ marginBottom: "20px" }}
          >
            ← Back to Products Management
          </button>
          <h1>Edit Product</h1>

          {error && (
            <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
          )}

          <div
            className="edit-form"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Name:</label>
              <input
                type="text"
                value={editedProduct.name}
                onChange={(e) =>
                  handleInputChange("name", e.target.value)
                }
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Price:</label>
              <input
                type="number"
                step="0.01"
                value={editedProduct.price}
                onChange={(e) =>
                  handleInputChange("price", e.target.value)
                }
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Stock:</label>
              <input
                type="number"
                value={editedProduct.stock}
                onChange={(e) =>
                  handleInputChange("stock", e.target.value)
                }
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Description:</label>
              <textarea
                value={editedProduct.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  height: "100px",
                }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Average Weekly Sales (optional):</label>
              <input
                type="number"
                step="0.01"
                value={editedProduct.average_weekly_sales}
                onChange={(e) =>
                  handleInputChange(
                    "average_weekly_sales",
                    e.target.value
                  )
                }
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Lead Time (days, optional):</label>
              <input
                type="number"
                value={editedProduct.lead_time}
                onChange={(e) =>
                  handleInputChange("lead_time", e.target.value)
                }
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Current Image:</label>
              {currentImage ? (
                <div style={{ marginTop: "5px" }}>
                  <img
                    src={
                      currentImage.startsWith("http")
                        ? currentImage
                        : `/storage/${currentImage}`
                    }
                    alt="Product"
                    style={{ maxWidth: "150px" }}
                  />
                </div>
              ) : (
                <p style={{ marginTop: "5px" }}>No image</p>
              )}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>New Image (optional):</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                className="btn"
                onClick={saveEdit}
                disabled={saving}
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
              <button
                className="btn btn-outline"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminEditProductPage;
