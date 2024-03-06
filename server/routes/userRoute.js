import express from "express";
const router = express.Router();
import { authUser, registerUser } from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

router.post("/auth", authUser);

router.post("/register", registerUser);

export default router;
