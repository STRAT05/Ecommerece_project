import React from 'react';

function CartItem({ item, onQuantityChange, onRemove, formatCurrency }) {
  return (
    <div className="cart-item" key={item.id}>
      <img src={item.img} alt={item.name} />
      <div className="item-details">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="quantity">
          <button onClick={() => onQuantityChange(item.id, -1)}>-</button>
          <input type="text" readOnly value={item.quantity} />
          <button onClick={() => onQuantityChange(item.id, 1)}>+</button>
        </div>
      </div>
      <div className="item-price">
        <p>{formatCurrency(item.price)}</p>
        <button className="remove-btn" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
