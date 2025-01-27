import React, { createContext, useContext, useState } from 'react';

// Create CartContext
const CartContext = createContext();

// Custom hook to use Cart context
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity < existingProduct.stock) { // Check stock before increasing quantity
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 } // Increment quantity if within stock limits
              : item
          );
        } else {
          alert(`Only ${product.stock} of ${product.name} are available.`);
          return prevCart;
        }
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to update the quantity of a product
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(quantity, item.stock) } // Ensure quantity does not exceed stock
          : item
      )
    );
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
