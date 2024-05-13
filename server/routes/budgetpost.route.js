// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../Database/models/budget');  // Adjust the path as necessary

// POST request to add a new product
router.post('/', async (req, res) => {
    try {
        const {title, transport, accommodations, tickets, foods } = req.body;
        const product = new Product({title, transport, accommodations, tickets, foods});
        await product.save();
        res.status(201).send({ message: "Product added successfully!", product });
    } catch (error) {
        res.status(400).send({ message: "Failed to add the product", error: error.message });
    }
});


module.exports = router;

