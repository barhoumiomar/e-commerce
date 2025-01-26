// routes/cart.js
const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const router = express.Router();

// Add product to cart
router.post('/add-to-cart', async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // If the user doesn't have a cart yet, create one
      cart = new Cart({
        userId,
        products: [
          {
            productId: product._id,
            quantity: quantity || 1,
          },
        ],
      });
    } else {
      // If the user already has a cart, add the product
      const productIndex = cart.products.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (productIndex === -1) {
        cart.products.push({ productId, quantity: quantity || 1 });
      } else {
        cart.products[productIndex].quantity += quantity || 1;
      }
    }

    await cart.save();
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
