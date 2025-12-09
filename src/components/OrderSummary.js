import React from "react";

function OrderSummary({ items, total }) {
  const shipping = items.length > 0 ? 500 : 0;
  const grandTotal = total + shipping;

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div className="summary-item" key={item.id}>
            {item.product?.image && (
              <img
                src={
                  item.product.image.startsWith("http")
                    ? item.product.image
                    : `/storage/${item.product.image}`
                }
                alt={item.product.name}
              />
            )}
            <div>
              <p>
                {item.product?.name} × {item.quantity}
              </p>
              <span>
                ₱{(item.quantity * (item.product?.price || 0)).toFixed(2)}
              </span>
            </div>
          </div>
        ))
      )}

      <div className="summary-totals">
        <p>
          <span>Subtotal:</span>{" "}
          <span>₱{total.toFixed(2)}</span>
        </p>
        <p>
          <span>Shipping Fee:</span>{" "}
          <span>₱{shipping.toFixed(2)}</span>
        </p>
        <p className="grand-total">
          <span>Total:</span>{" "}
          <span>₱{grandTotal.toFixed(2)}</span>
        </p>
      </div>

      <p className="terms">
        By placing your order, you agree to our{" "}
        <a href="#">Terms &amp; Conditions</a>.
      </p>
    </div>
  );
}

export default OrderSummary;
