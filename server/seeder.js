// seeder.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product"); // Ensure the Product model path is correct

dotenv.config(); // Load environment variables

// Manually defined products with specific images
const products = [
  {
    name: "Wireless Mouse",
    price: 19.99,
    description: "A comfortable and responsive wireless mouse for everyday use.",
    category: "Electronics",
    stock: 50,
    image: "https://www.fingers.co.in/secure/api/uploads/products/1713252661_New-angle.png",
  },
  {
    name: "Gaming Keyboard",
    price: 49.99,
    description: "A high-performance gaming keyboard with customizable RGB lighting.",
    category: "Electronics",
    stock: 30,
    image: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/04/rgb-lit-gaming-mechanical-keyboard.jpg",
  },
  {
    name: "Running Shoes",
    price: 79.99,
    description: "Lightweight and comfortable running shoes for all terrains.",
    category: "Footwear",
    stock: 100,
    image: "https://pyxis.nymag.com/v1/imgs/a6d/fc0/4da4be21d1741718404660586a5b6a6f3e.jpg",
  },
  {
    name: "Backpack",
    price: 39.99,
    description: "Durable and spacious backpack for daily use or travel.",
    category: "Accessories",
    stock: 70,
    image: "https://m.media-amazon.com/images/I/81WjalMN8mL._AC_UY1000_.jpg",
  },
  {
    name: "Smartwatch",
    price: 99.99,
    description: "Feature-packed smartwatch with fitness tracking and notifications.",
    category: "Electronics",
    stock: 25,
    image: "https://i5.walmartimages.com/asr/dda6bc1f-d282-4cf9-ad29-e827222bc4d5.8d402328f4d54e2b9a252879ec51fb79.jpeg",
  },
  {
    name: "Water Bottle",
    price: 14.99,
    description: "Reusable stainless steel water bottle to keep your drinks hot or cold.",
    category: "Accessories",
    stock: 120,
    image: "https://monos.com/cdn/shop/products/Kiyo-UVC-Bottle-500ml-Blue-Hour_900x.png?v=1678603856",
  },
  {
    name: "Bluetooth Speaker",
    price: 29.99,
    description: "Compact and portable Bluetooth speaker with excellent sound quality.",
    category: "Electronics",
    stock: 40,
    image: "https://m.media-amazon.com/images/I/718yxonHN8L.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    await Product.deleteMany(); // Clear existing products
    console.log("Existing products deleted");

    await Product.insertMany(products); // Insert manually defined products
    console.log("Database seeded successfully with manual products!");

    process.exit(); // Exit once done
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1); // Exit with failure code
  }
};

seedDatabase();
