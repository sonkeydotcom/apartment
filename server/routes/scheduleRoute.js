import express, { Router } from "express";
import { createSchedule } from "../controllers/schduleController.js";

const router = express.Router();

router.post("/:id", createSchedule);

export default router;
