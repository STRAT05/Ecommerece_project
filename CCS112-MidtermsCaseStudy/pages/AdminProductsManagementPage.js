import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/shopData";
import MainNavbar from "../components/MainNavbar";
import MainFooter from "../components/MainFooter";
import "../main.css";

const AdminProductsManagementPage = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState(products);
  const [editingId, setEditingId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  const addItem = () => {
    const newId = Math.max(...productList.map(p => p.id)) + 1;
    const newProduct = {
      id: newId,
      name: "New Product",
      price: 0,
      category: "New Category",
      series: "New Series",
      image: "/path/to/placeholder.jpg" 
    };
    setProductList([...productList, newProduct]);
  };

  const removeItem = (id) => {
    setProductList(productList.filter(product => product.id !== id));
  };

  const startEdit = (product) => {
    setEditingId(product.id);
    setEditedProduct({ ...product });
  };

  const saveEdit = () => {
    setProductList(productList.map(p => p.id === editingId ? editedProduct : p));
    setEditingId(null);
    setEditedProduct({});
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditedProduct({});
  };

  const handleInputChange = (field, value) => {
    setEditedProduct({ ...editedProduct, [field]: value });
  };

  return (
    <>
      <MainNavbar />
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
                <th>Category</th>
                <th>Series</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    {editingId === product.id ? (
                      <input
                        type="text"
                        value={editedProduct.name || ''}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        style={{ width: '100%' }}
                      />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td>
                    {editingId === product.id ? (
                      <input
                        type="number"
                        value={editedProduct.price || ''}
                        onChange={(e) => handleInputChange('price', parseFloat(e.target.value) || 0)}
                        style={{ width: '100%' }}
                      />
                    ) : (
                      `$${product.price}`
                    )}
                  </td>
                  <td>
                    {editingId === product.id ? (
                      <input
                        type="text"
                        value={editedProduct.category || ''}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        style={{ width: '100%' }}
                      />
                    ) : (
                      product.category
                    )}
                  </td>
                  <td>
                    {editingId === product.id ? (
                      <input
                        type="text"
                        value={editedProduct.series || ''}
                        onChange={(e) => handleInputChange('series', e.target.value)}
                        style={{ width: '100%' }}
                      />
                    ) : (
                      product.series
                    )}
                  </td>
                  <td>
                    {editingId === product.id ? (
                      <input
                        type="text"
                        value={editedProduct.image || ''}
                        onChange={(e) => handleInputChange('image', e.target.value)}
                        style={{ width: '100%' }}
                      />
                    ) : (
                      <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
                    )}
                  </td>
                  <td>
                    {editingId === product.id ? (
                      <>
                        <button className="btn btn-outline" onClick={saveEdit} style={{ marginRight: '5px' }}>Save</button>
                        <button className="btn btn-outline" onClick={cancelEdit} style={{ marginLeft: '5px' }}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button className="btn" onClick={() => startEdit(product)} style={{ marginRight: '5px' }}>Edit</button>
                        <button className="btn btn-outline" onClick={() => removeItem(product.id)}>Remove</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <MainFooter />
    </>
  );
};

export default AdminProductsManagementPage;
