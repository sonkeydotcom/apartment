import express from "express";
import { sendEmail } from "../controllers/mailController.js";

const router = express.Router();

router.post("/mailer", (req, res) => {
  const mailData = {
    from: "_mainaccount@wallstreetmeme.co",
    to: "annagu.kennedy@gmail.com",
    subject: "test",
    text: "hello",
  };

  try {
    sendEmail(mailData);
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
});

export default router;
