import React from 'react';
import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom';
import './CheckoutPage.css'; // For styling

const CheckoutPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate the total price
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  // Calculate total available stock across all items
  const totalStock = cart.reduce((total, product) => total + product.stock, 0);

  // Handle quantity change during checkout
  const handleIncrement = (product) => {
    if (product.quantity < product.stock) {
      updateQuantity(product.id, product.quantity + 1);
    }
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add some items to your cart before proceeding to checkout.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="checkout-item">
              <img src={product.image} alt={product.name} className="checkout-item-image" />
              <p>{product.name} - {product.price} DT</p>

              {/* Quantity controls */}
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(product)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleIncrement(product)}>+</button>
              </div>

              <p>Stock available: {product.stock}</p> {/* Display stock available */}

              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total: {totalPrice} DT</h3>

      {/* Display total stock available in the cart */}
      <h4>Total Stock Available in Cart: {totalStock}</h4>

      <div className="checkout-actions">
        <button className="checkout-button">Proceed with Payment</button>
        <Link to="/cart" className="back-to-cart">Back to Cart</Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
