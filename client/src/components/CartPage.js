import React from 'react';
import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom';
import './CartPage.css'; // For styling

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  // Handle quantity change
  const handleIncrement = (product) => {
    if (product.quantity < product.stock) { // Prevent adding more than the stock
      updateQuantity(product.id, product.quantity + 1);
    }
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) { // Prevent going below 1
      updateQuantity(product.id, product.quantity - 1);
    }
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-image" />
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
      <Link to="/checkout" className="checkout-link">Proceed to Checkout</Link>
    </div>
  );
};

export default CartPage;
