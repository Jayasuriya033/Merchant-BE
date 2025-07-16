import { Router } from 'express';
import { setCustomerDetailsRoutes } from './customerDetails.routes';
import { setCustomerLogoRoutes } from './customerLogo.routes';
import setOwnerRoutes from './owner.routes';
import { setRoleRoutes } from './role.routes';
import { setBoxCollectionRoutes } from './boxCollection.routes';
import { setShopDetailsRoutes } from './shopDetails.routes';
import { setShopLogoRoutes } from './shopLogo.routes';
import { setSalesDetailsRoutes } from './salesDetails.routes';
import loginRoutes from './login.routes';

const router = Router();

// Attach routers that use set*Routes pattern
setCustomerDetailsRoutes(router);
setCustomerLogoRoutes(router);
setOwnerRoutes(router);
setRoleRoutes(router);
setBoxCollectionRoutes(router);
setShopDetailsRoutes(router);
setShopLogoRoutes(router);
setSalesDetailsRoutes(router);

// Attach routers that export a router directly (like login)
router.use('/', loginRoutes);

export default router;