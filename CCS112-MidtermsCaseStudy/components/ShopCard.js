import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "../shop.css";

const ShopCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // ✅ Optional: add product to cart state if you have one
    navigate("/cart"); // Redirect to CartPage
  };

  return (
    <div className="shop-card">
      <div className="shop-card-img">
        <img src={product.image} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <div className="card-actions">
        <button className="btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="btn-outline">Show Details</button>
      </div>
    </div>
  );
};

export default ShopCard;
