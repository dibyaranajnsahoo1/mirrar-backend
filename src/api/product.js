// api/product.js
import express from 'express';
import productController from '../controllers/productController';

const router = express.Router();

router.post('/create', productController.createProduct);
router.get('/read/:id', productController.readProduct);
router.put('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);

export default router;