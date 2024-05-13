// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../Database/models/budget'); // Ensure the path matches where your model is saved

// Route to get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
});

module.exports = router;
