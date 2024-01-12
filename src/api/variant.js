// api/variant.js
import express from 'express';
import variantController from '../controllers/variantController';

const router = express.Router();

router.post('/create/:productId', variantController.createVariant);
router.get('/read/:id', variantController.readVariant);
router.put('/update/:id', variantController.updateVariant);
router.delete('/delete/:id', variantController.deleteVariant);

export default router;