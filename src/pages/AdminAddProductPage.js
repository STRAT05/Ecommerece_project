import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import "../main.css";

const AdminAddProductPage = () => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: ""
  });

  const handleInputChange = (field, value) => {
    setNewProduct({ ...newProduct, [field]: value });
  };

  const saveNewProduct = () => {
    const storedProducts = localStorage.getItem('adminProducts');
    let products = [];
    if (storedProducts) {
      products = JSON.parse(storedProducts);
    }
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const productToAdd = {
      id: newId,
      name: newProduct.name,
      price: newProduct.price,
      description: newProduct.description,
      image: newProduct.image,
      category: "New Category",
      series: "New Series"
    };
    products.push(productToAdd);
    localStorage.setItem('adminProducts', JSON.stringify(products));
    alert('Product added successfully!');
    navigate('/admin/products');
  };

  const cancelAdd = () => {
    navigate('/admin/products');
  };

  return (
    <>
      <AdminNavbar />
      <section className="admin-add-product" style={{ marginTop: '80px', marginLeft: '20px', marginRight: '20px' }}>
        <div className="container">
          <button className="btn btn-outline" onClick={() => navigate('/admin/products')} style={{ marginBottom: '20px' }}>
            ← Back to Products Management
          </button>
          <h1>Add New Product</h1>
          <div className="add-form" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label>Name:</label>
              <input
                type="text"
                value={newProduct.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label>Price:</label>
              <input
                type="number"
                value={newProduct.price}
                onChange={(e) => handleInputChange('price', parseFloat(e.target.value) || 0)}
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label>Description:</label>
              <textarea
                value={newProduct.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                style={{ width: '100%', padding: '8px', marginTop: '5px', height: '100px' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label>Image URL:</label>
              <input
                type="text"
                value={newProduct.image}
                onChange={(e) => handleInputChange('image', e.target.value)}
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn" onClick={saveNewProduct}>Add Product</button>
              <button className="btn btn-outline" onClick={cancelAdd}>Cancel</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminAddProductPage;
