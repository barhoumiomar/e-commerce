import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/products'); // Navigate to the Products page
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Our Store</h1>
        <p>
        Welcome to myStore, your one-stop destination for amazing apps! Explore, discover, and find the perfect solution for all your needs
          
        </p>

        <button className="cta-btn" onClick={handleShopNowClick}>Shop Now</button>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At our store, we are passionate about offering the best products to enhance your lifestyle. 
          With a focus on quality, affordability, and customer satisfaction, we aim to bring you an exceptional shopping experience. 
          Our curated collection features products from top brands, all carefully selected to meet your needs.
        </p>

        <p>
          We believe that shopping should be simple and enjoyable. That's why we offer:
        </p>
        <ul>
          <li>Fast and secure delivery</li>
          <li>Exclusive deals and offers</li>
          <li>Exceptional customer support</li>
          <li>A wide selection of high-quality products</li>
        </ul>

        <p>
          Join the thousands of satisfied customers who trust us for their shopping needs. Explore our store today and experience the difference.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide customers with high-quality products at affordable prices, backed by exceptional service. 
          We are committed to ensuring that each shopping experience is as seamless and enjoyable as possible. 
          Your satisfaction is our priority, and we continuously strive to improve our products, services, and customer care.
        </p>
      </section>

      {/* Additional sections can go here (e.g., Featured Products, Testimonials) */}
    </div>
  );
}

export default HomePage;
