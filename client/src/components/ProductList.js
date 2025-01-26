import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // To get category from URL

function ProductList() {
  const { category } = useParams(); // Get category from URL parameter
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/category/${category}`)
      .then(response => {
        setProducts(response.data); // Set products filtered by category
      })
      .catch(error => {
        console.error("Error fetching products by category:", error);
      });
  }, [category]); // Rerun when category changes

  return (
    <div>
      <h2>Products in {category} category</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
