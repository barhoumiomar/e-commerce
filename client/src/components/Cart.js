// src/components/Cart.js
import React from "react";
import { useCart } from "../context/CartContext"; // Import the cart context
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calculate the total price of the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      // Ensure price is a valid number (whether it's a string or a number)
      const price = typeof item.price === "string" ? parseFloat(item.price.replace("DT", "").trim()) : item.price;

      // Return the accumulated total, ensuring the price is valid
      return total + (isNaN(price) ? 0 : price);
    }, 0);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go back to shop</Link></p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <p>{item.name}</p>
                  <p>{item.price} DT</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: {calculateTotal()} DT</h3>
          <button onClick={clearCart}>Clear Cart</button>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
