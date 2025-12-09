import React from "react";

function CartItem({ item, onQuantityChange, onRemove, formatCurrency }) {
  const handleDecrease = () => onQuantityChange(item.id, -1);
  const handleIncrease = () => onQuantityChange(item.id, 1);
  const handleRemove   = () => onRemove(item.id);

  return (
    <div className="cart-item">
      {item.img && (
        <img src={item.img} alt={item.name || "Cart item"} />
      )}

      <div className="item-details">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="quantity">
          <button onClick={handleDecrease}>-</button>
          <input type="text" readOnly value={item.quantity} />
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>

      <div className="item-price">
        <p>{formatCurrency(item.price)}</p>
        <button className="remove-btn" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
