import express from "express";
import multer from "multer";
import AWS from "aws-sdk";
import path from "path";

import { protect } from "../middleware/authMiddleware.js";
import {
  viewListings,
  createListing,
  viewListing,
} from "../controllers/rentalController.js";
const router = express.Router();

const s3 = new AWS.S3();

router.get("/", viewListings);

router.get("/q", viewListing);

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
});

router.post("/", protect, upload.array("images", 12), createListing);

export default router;
