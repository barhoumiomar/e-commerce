import React from 'react';
import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom';
import './CartPage.css'; // For styling

const CartPage = () => {
  const { cart, removeFromCart } = useCart(); 

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} className="cart-item-image" />
              <p>{product.name} - {product.price} DT</p>
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
