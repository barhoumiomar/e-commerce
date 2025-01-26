// src/components/CheckoutPage.js
import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Import the cart context
import { Link } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // Calculate the total by removing "DT" and parsing the price as a float
  const totalPrice = cart.reduce(
    (total, product) => total + parseFloat(product.price.replace("DT", "").trim()),
    0
  );

  const handlePlaceOrder = () => {
    if (!shippingAddress || !paymentMethod) {
      alert("Please fill out all the required fields!");
    } else {
      alert("Order placed successfully!");
      clearCart(); // Clear the cart after placing the order
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/cart">Go back to cart</Link></p>
      ) : (
        <div>
          <h3>Order Summary</h3>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <p>{product.name} - {product.price}</p>
              </li>
            ))}
          </ul>
          <h4>Total: {totalPrice} DT</h4>

          <div>
            <label>
              Shipping Address:
              <input
                type="text"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="Enter shipping address"
              />
            </label>
            <label>
              Payment Method:
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Select payment method</option>
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </label>
            <button onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
