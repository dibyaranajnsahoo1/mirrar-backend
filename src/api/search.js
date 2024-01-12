// api/search.js
import express from 'express';
import searchController from '../controllers/searchController';

const router = express.Router();

router.get('/search', searchController.searchProducts);

export default router;