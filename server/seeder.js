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
    image: "https://source.unsplash.com/400x300/?mouse",
  },
  {
    name: "Gaming Keyboard",
    price: 49.99,
    description: "A high-performance gaming keyboard with customizable RGB lighting.",
    category: "Electronics",
    stock: 30,
    image: "https://source.unsplash.com/400x300/?keyboard",
  },
  {
    name: "Running Shoes",
    price: 79.99,
    description: "Lightweight and comfortable running shoes for all terrains.",
    category: "Footwear",
    stock: 100,
    image: "https://source.unsplash.com/400x300/?shoes",
  },
  {
    name: "Backpack",
    price: 39.99,
    description: "Durable and spacious backpack for daily use or travel.",
    category: "Accessories",
    stock: 70,
    image: "https://source.unsplash.com/400x300/?backpack",
  },
  {
    name: "Smartwatch",
    price: 99.99,
    description: "Feature-packed smartwatch with fitness tracking and notifications.",
    category: "Electronics",
    stock: 25,
    image: "https://source.unsplash.com/400x300/?smartwatch",
  },
  {
    name: "Water Bottle",
    price: 14.99,
    description: "Reusable stainless steel water bottle to keep your drinks hot or cold.",
    category: "Accessories",
    stock: 120,
    image: "https://source.unsplash.com/400x300/?waterbottle",
  },
  {
    name: "Bluetooth Speaker",
    price: 29.99,
    description: "Compact and portable Bluetooth speaker with excellent sound quality.",
    category: "Electronics",
    stock: 40,
    image: "https://source.unsplash.com/400x300/?speaker",
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
