import express from "express";
import multer from "multer";
import path from "path";
import {
  viewListings,
  createListing,
  viewListing,
} from "../controllers/rentalController.js";
const router = express.Router();

router.get("/", viewListings);
router.get("/:id", viewListing);

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/webp"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Images only"));
    }
  },
});

router.post("/", upload.array("images", 12), createListing);

export default router;
