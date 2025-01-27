import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext"; // Import the Cart Context
import ConfirmationModal from "./ConfirmationModal"; // Import the Confirmation Modal component
import "./Products.css"; // Import the CSS file

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product
  const [showModal, setShowModal] = useState(false); // Toggle modal visibility
  const { addToCart } = useCart(); // Add to cart from CartContext

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setSelectedProduct(product); // Set selected product
    setShowModal(true); // Show the confirmation modal
  };

  const confirmAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct); // Add product to cart
    }
    setShowModal(false); // Close modal
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {showModal && (
        <ConfirmationModal
          product={selectedProduct}
          onConfirm={confirmAddToCart}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Products;
