import express from "express";

import sendMails from "../controllers/sendMail.js";

const router = express.Router();

router.post("/", sendMails);

export default router;
