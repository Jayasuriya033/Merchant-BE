import { Router } from 'express';
import {createShopDetails, getShopDetails, updateShopDetails, deleteShopDetails } from '../controllers/shopDetails.controller';


const router = Router();

  router.post('/create-shop-details', createShopDetails);
  // router.get('/:id', getShopDetails);
  // router.put('/:id', updateShopDetails);
  // router.delete('/:id', deleteShopDetails);

  export default router;