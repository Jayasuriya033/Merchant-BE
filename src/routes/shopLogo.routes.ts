import e, { Router } from 'express';
import { authenticateJWT } from '../middleware/auth.middleware';
import  {createShopLogo, getShopLogo, updateShopLogo, deleteShopLogo} from '../controllers/shopLogo.controller';

const router = Router();



  router.post('/upload-logo', createShopLogo);
  // router.get('/:id', getShopLogo);
  // router.put('/:id', updateShopLogo);
  // router.delete('/:id', deleteShopLogo);

  export default router;