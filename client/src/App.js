import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import { CartProvider } from './context/CartContext'; 
import HomePage from './components/HomePage'; // HomePage as the main page
import Products from './components/Products'; // A dedicated Products page
import Login from './components/Login';
import Register from './components/Register';
import './App.css';


const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        
        {/* Main Routes for Pages */}
        <main>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Products Page */}
            <Route path="/products" element={<Products />} />

            {/* Product Details Page */}
            <Route path="/product/:productId" element={<ProductDetails />} />

            {/* Cart and Checkout Pages */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            
            {/* Authentication Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

       
      </Router>
    </CartProvider>
  );
};

export default App;
