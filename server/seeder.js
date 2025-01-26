// seeder.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product"); // Ensure the Product model path is correct

dotenv.config(); // Load environment variables

// Generate 100 sample products
const products = Array.from({ length: 100 }, (_, i) => ({
  name: `Product ${i + 1} `,
  price: (Math.random() * 50).toFixed(2), // Random price
  description: `This is the description for Product ${i + 1}.`,
  category: i % 2 === 0 ? "Category A" : "Category B", // Alternate categories
  stock: Math.floor(Math.random() * 100) + 1, // Random stock quantity
}));

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    await Product.deleteMany(); // Clear existing products
    console.log("Existing products deleted");

    await Product.insertMany(products); // Insert new products
    console.log("Database seeded successfully!");

    process.exit(); // Exit once done
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1); // Exit with failure code
  }
};

seedDatabase();
