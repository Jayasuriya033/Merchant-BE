import { Router } from "express";
import { authenticateJWT } from "../middleware/auth.middleware";
import {
  createOwner,
  getOwner,
  updateOwner,
  deleteOwner,
} from "../controllers/owner.controller";

const router = Router();

router.post("/create-owner-details", createOwner);
// router.get('/', getOwner);
// router.put('/', updateOwner);
// router.delete('/', deleteOwner);

export default router;
