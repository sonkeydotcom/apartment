import express from "express";

import { createApplication } from "../controllers/applicationController.js";

const router = express.Router();

router.post("/:id", createApplication);

export default router;
