import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/shopData";
import AdminNavbar from "../components/AdminNavbar";
import "../main.css";

const AdminProductsManagementPage = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('adminProducts');
    if (storedProducts) {
      setProductList(JSON.parse(storedProducts));
    } else {
      setProductList(products);
      localStorage.setItem('adminProducts', JSON.stringify(products));
    }
  }, []);

  const addItem = () => {
    navigate('/admin/products/add');
  };

  const removeItem = (id) => {
    const updatedList = productList.filter(product => product.id !== id);
    setProductList(updatedList);
    localStorage.setItem('adminProducts', JSON.stringify(updatedList));
  };

  const handleLogout = () => {
    // In a real app, clear session/token here
    navigate('/admin/login');
  };

  return (
    <>
      <AdminNavbar />
      <section className="admin-products-management" style={{ marginTop: '80px', marginLeft: '20px', marginRight: '20px' }}>
        <div className="container">
          <button className="btn btn-outline" onClick={() => navigate('/admin')} style={{ marginBottom: '20px' }}>
            ← Back to Dashboard
          </button>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h1 style={{ margin: 0 }}>Products Management</h1>
            <button className="btn" onClick={addItem}>Add Item</button>
          </div>
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
                  <td>{product.series} - {product.category}</td>
                  <td>
                    <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
                  </td>
                  <td style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button className="btn" onClick={() => navigate(`/admin/products/edit/${product.id}`)}>Edit</button>
                    <button className="btn btn-outline" onClick={() => removeItem(product.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminProductsManagementPage;
