import { Router } from 'express';
import { RoleController } from '../controllers/role.controller';
import { authenticateJWT } from '../middleware/auth.middleware';

const router = Router();
const roleController = new RoleController();

export function setRoleRoutes(app: Router) {
  app.use('/api/roles', router);

  router.post('/', authenticateJWT, roleController.createRole.bind(roleController));
  router.get('/:id', authenticateJWT, roleController.getRole.bind(roleController));
  router.put('/:id', authenticateJWT, roleController.updateRole.bind(roleController));
  router.delete('/:id', authenticateJWT, roleController.deleteRole.bind(roleController));
}