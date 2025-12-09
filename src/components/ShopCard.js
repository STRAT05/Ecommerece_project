import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../shop.css";
import api from "../api/client";

const ShopCard = ({ product }) => {
  const navigate = useNavigate();
  const [adding, setAdding] = useState(false);

  const imageSrc = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `/storage/${product.image}`
    : "";

  const handleAddToCart = async () => {
    if (!product?.id) return;
    setAdding(true);
    try {
      await api.post("/cart", { product_id: product.id, quantity: 1 });
      navigate("/cart");
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.message || "Failed to add product to cart"
      );
    } finally {
      setAdding(false);
    }
  };

  const handleShowDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="shop-card">
      <div className="shop-card-img">
        {imageSrc && <img src={imageSrc} alt={product.name} />}
      </div>
      <h3>{product.name}</h3>
      <p>₱{product.price}</p>

      <div className="card-actions">
        <button className="btn" onClick={handleAddToCart} disabled={adding}>
          {adding ? "Adding..." : "Add to Cart"}
        </button>
        <button className="btn-outline" onClick={handleShowDetails}>
          Show Details
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
