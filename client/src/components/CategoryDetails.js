import React from 'react';
import { useParams } from 'react-router-dom';
import './CategoryDetails.css';

// Hardcoded categories and products
const categories = {
  Electronics: [
    { id: 1, name: "Smartphone", price: 299, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Laptop", price: 799, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", price: 99, image: "https://via.placeholder.com/150" }
  ],
  Fashion: [
    { id: 4, name: "T-shirt", price: 19, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Jeans", price: 49, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Jacket", price: 79, image: "https://via.placeholder.com/150" }
  ],
  Home: [
    { id: 7, name: "Sofa", price: 499, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Lamp", price: 35, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Coffee Table", price: 120, image: "https://via.placeholder.com/150" }
  ]
};

function CategoryDetails() {
  const { categoryName } = useParams();  // Get the category name from the URL
  const products = categories[categoryName];  // Get products for that category

  if (!products) {
    return <p>Category not found.</p>;
  }

  return (
    <div className="category-details-container">
      <h1>{categoryName} Category</h1>

      <div className="product-card-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryDetails;
