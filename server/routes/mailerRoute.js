import express from "express";

import sendMailers from "../controllers/sendMailers.js";

const router = express.Router();

router.post("/", sendMailers);

export default router;
