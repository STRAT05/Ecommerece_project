import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/shopData";
import AdminNavbar from "../components/AdminNavbar";
import "../main.css";

const AdminEditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setEditedProduct({ ...foundProduct });
    } else {
      navigate('/admin/products');
    }
  }, [id, navigate]);

  const handleInputChange = (field, value) => {
    setEditedProduct({ ...editedProduct, [field]: value });
  };

  const saveEdit = () => {
    // In a real app, this would update the backend
    // For now, we'll just navigate back
    alert('Product updated successfully!');
    navigate('/admin/products');
  };

  const cancelEdit = () => {
    navigate('/admin/products');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AdminNavbar />
      <section className="admin-edit-product" style={{ marginTop: '80px', marginLeft: '20px', marginRight: '20px' }}>
        <div className="container">
          <button className="btn btn-outline" onClick={() => navigate('/admin/products')} style={{ marginBottom: '20px' }}>
            ← Back to Products Management
          </button>
          <h1>Edit Product</h1>
          <div className="edit-form" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label>Name:</label>
              <input
                type="text"
                value={editedProduct.name || ''}
                onChange={(e) => handleInputChange('name', e.target.value)}
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label>Price:</label>
              <input
                type="number"
                value={editedProduct.price || ''}
                onChange={(e) => handleInputChange('price', parseFloat(e.target.value) || 0)}
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label>Description:</label>
              <textarea
                value={editedProduct.description || ''}
                onChange={(e) => handleInputChange('description', e.target.value)}
                style={{ width: '100%', padding: '8px', marginTop: '5px', height: '100px' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label>Image URL:</label>
              <input
                type="text"
                value={editedProduct.image || ''}
                onChange={(e) => handleInputChange('image', e.target.value)}
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn" onClick={saveEdit}>Save Changes</button>
              <button className="btn btn-outline" onClick={cancelEdit}>Cancel</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminEditProductPage;
