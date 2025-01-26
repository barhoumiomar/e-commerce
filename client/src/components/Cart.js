// src/components/Cart.js
import React from "react";
import { useCart } from "../context/CartContext"; // Import the cart context
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calculate the total by removing "DT" and parsing the price as a float
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      // Remove "DT" and spaces and convert the price string to a float number
      const price = parseFloat(item.price.replace('DT', '').trim());

      // Ensure that price is a valid number before adding
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
                  <p>{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
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
