import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import "../css/main.css";
import api from "../api/client"; // <-- axios client

const AdminAddProductPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    average_weekly_sales: "",
    lead_time: "",
    image: null, // file
  });
  const [error, setError]   = useState(null);
  const [saving, setSaving] = useState(false);

  const handleInputChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    setForm(prev => ({ ...prev, image: file }));
  };

  const saveNewProduct = async () => {
    if (!form.name || !form.price || !form.stock) {
      alert("Name, price, and stock are required.");
      return;
    }

    setSaving(true);
    setError(null);

    const data = new FormData();
    data.append("name", form.name);
    if (form.description)          data.append("description", form.description);
    data.append("price",           form.price);
    data.append("stock",           form.stock);
    if (form.average_weekly_sales) data.append("average_weekly_sales", form.average_weekly_sales);
    if (form.lead_time)            data.append("lead_time", form.lead_time);
    if (form.image)                data.append("image", form.image);

    try {
      await api.post("/products", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product added successfully!");
      navigate("/admin/products");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to add product");
    } finally {
      setSaving(false);
    }
  };

  const cancelAdd = () => {
    navigate("/admin/products");
  };

  return (
    <>
      <AdminNavbar />
      <section
        className="admin-add-product"
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

          <h1>Add New Product</h1>
          {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

          <div
            className="add-form"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Name:</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Price:</label>
              <input
                type="number"
                step="0.01"
                value={form.price}
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
                value={form.stock}
                onChange={(e) =>
                  handleInputChange("stock", e.target.value)
                }
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Description:</label>
              <textarea
                value={form.description}
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
                value={form.average_weekly_sales}
                onChange={(e) =>
                  handleInputChange("average_weekly_sales", e.target.value)
                }
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Lead Time (days, optional):</label>
              <input
                type="number"
                value={form.lead_time}
                onChange={(e) =>
                  handleInputChange("lead_time", e.target.value)
                }
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label>Image:</label>
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
                onClick={saveNewProduct}
                disabled={saving}
              >
                {saving ? "Adding..." : "Add Product"}
              </button>
              <button className="btn btn-outline" onClick={cancelAdd}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminAddProductPage;
