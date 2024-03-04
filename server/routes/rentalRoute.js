import express from "express";
import {
  viewListings,
  createListing,
  viewListing,
} from "../controllers/rentalController.js";
const router = express.Router();

router.get("/", viewListings);
router.get("/:id", viewListing);

router.post("/", createListing);

export default router;
