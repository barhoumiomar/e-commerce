// src/components/CheckoutPage.js
import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Import the cart context
import { Link } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    ownerName: "",
  });

  const totalPrice = cart.reduce((total, product) => total + Number(product.price), 0);

  const handlePlaceOrder = () => {
    if (!shippingAddress || !paymentMethod || !cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.ownerName) {
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
                <p>{product.name} - {product.price} DT</p>
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
                required
              />
            </label>
            <label>
              Payment Method:
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="">Select payment method</option>
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </label>
            {paymentMethod === "credit" && (
              <div className="card-details">
                <label>
                  Card Number:
                  <input
                    type="text"
                    value={cardDetails.cardNumber}
                    onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                    placeholder="Card Number"
                    required
                  />
                </label>
                <label>
                  Expiry Date:
                  <input
                    type="text"
                    value={cardDetails.expiryDate}
                    onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                    placeholder="MM/YY"
                    required
                  />
                </label>
                <label>
                  Card Owner's Name:
                  <input
                    type="text"
                    value={cardDetails.ownerName}
                    onChange={(e) => setCardDetails({ ...cardDetails, ownerName: e.target.value })}
                    placeholder="Owner's Name"
                    required
                  />
                </label>
              </div>
            )}
            <button onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
