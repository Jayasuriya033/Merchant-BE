import { Router } from 'express';
import { CustomerDetailsController } from '../controllers/customerDetails.controller';
import { authenticateJWT } from '../middleware/auth.middleware';

const router = Router();
const customerDetailsController = new CustomerDetailsController();

export function setCustomerDetailsRoutes(app: Router) {
  app.use('/api/customer-details', router);

  router.post('/', authenticateJWT, customerDetailsController.createCustomerDetails);
  router.get('/:id', authenticateJWT, customerDetailsController.getCustomerDetails);
  router.put('/:id', authenticateJWT, customerDetailsController.updateCustomerDetails);
  router.delete('/:id', authenticateJWT, customerDetailsController.deleteCustomerDetails);
}