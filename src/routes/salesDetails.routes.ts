import { Router } from 'express';
import { SalesDetailsController } from '../controllers/salesDetails.controller';
import { authenticateJWT } from '../middleware/auth.middleware';

const router = Router();
const salesDetailsController = new SalesDetailsController();

export function setSalesDetailsRoutes(app: Router) {
  app.use('/api/sales-details', router);

  router.post('/', authenticateJWT, salesDetailsController.createSalesDetails);
  router.get('/:id', authenticateJWT, salesDetailsController.getSalesDetails);
  router.put('/:id', authenticateJWT, salesDetailsController.updateSalesDetails);
  router.delete('/:id', authenticateJWT, salesDetailsController.deleteSalesDetails);
}