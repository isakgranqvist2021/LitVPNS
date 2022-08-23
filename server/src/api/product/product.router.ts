import express from 'express';

import {
  getProductController,
  getProductsController,
} from './product.controllers';

const router = express.Router();

router.get('/', getProductsController);
router.get('/:id', getProductController);

export const productRouter = router;
