import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css'; // For styling

function CategoryList({ categories }) {
  return (
    <div className="category-list">
      <h2>Shop by Categories</h2>
      <div className="category-container">
        {categories.map((category) => (
          <Link to={`/products/${category}`} key={category} className="category-item">
            <button className="category-btn">{category}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
