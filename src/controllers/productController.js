const Product = require('../models/productModel');

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Other controller methods for update, delete, etc.

module.exports = {
  createProduct,
  getProducts,
};

// ... (previous code)

const updateProduct = async (req, res) => {
    const { productId } = req.params;
  
    try {
      const product = await Product.findByIdAndUpdate(productId, req.body, { new: true });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const deleteProduct = async (req, res) => {
    const { productId } = req.params;
  
    try {
      const product = await Product.findByIdAndDelete(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
  };
  