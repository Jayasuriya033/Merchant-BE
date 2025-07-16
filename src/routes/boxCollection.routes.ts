import { Router } from 'express';
import { BoxCollectionController } from '../controllers/boxCollection.controller';
import { authenticateJWT } from '../middleware/auth.middleware';

const router = Router();
const boxCollectionController = new BoxCollectionController();

export function setBoxCollectionRoutes(app: Router) {
  app.use('/api/box-collections', router);

  router.post('/', authenticateJWT, boxCollectionController.createBoxCollection);
  router.get('/', authenticateJWT, boxCollectionController.getBoxCollection);
  router.put('/', authenticateJWT, boxCollectionController.updateBoxCollection);
  router.delete('/', authenticateJWT, boxCollectionController.deleteBoxCollection);
}