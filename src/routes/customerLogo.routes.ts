import { Router } from 'express';
import { CustomerLogoController } from '../controllers/customerLogo.controller';
import { authenticateJWT } from '../middleware/auth.middleware';

const router = Router();
const customerLogoController = new CustomerLogoController();

export function setCustomerLogoRoutes(app: Router) {
  app.use('/api/customer-logos', router);

  router.post('/', authenticateJWT, customerLogoController.createCustomerLogo.bind(customerLogoController));
  router.get('/:id', authenticateJWT, customerLogoController.getCustomerLogo.bind(customerLogoController));
  router.put('/:id', authenticateJWT, customerLogoController.updateCustomerLogo.bind(customerLogoController));
  router.delete('/:id', authenticateJWT, customerLogoController.deleteCustomerLogo.bind(customerLogoController));
}