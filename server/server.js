import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import rentalRoute from "./routes/rentalRoute.js";
import scheduleRoute from "./routes/scheduleRoute.js";
import applicationRoute from "./routes/applicationRoute.js";
import userRoute from "./routes/userRoute.js";
import mailRoute from "./routes/mailRoute.js";
import mailerRoute from "./routes/mailerRoute.js";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddlware.js";

import multer from "multer";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// Connect to MongoDB database
connectDB();

// Middleware to handle form data

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to enable CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://apartment-beta.vercel.app/",
  "https://apartment-beta.vercel.app",
  "https://halsteadrealty.rent",
  "https://halsteadrealty.rent/",
];

// CORS middleware configuration
const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Enable CORS credentials
};

// Apply CORS middleware to all routes
app.use(cors(corsOptions));
// Use cors middleware with options

// Define routes
app.use("/api/rentals", rentalRoute);
app.use("/api/schedule", scheduleRoute);
app.use("/api/application", applicationRoute);
app.use("/api/mail", mailRoute);
app.use("/api/mailer", mailerRoute);
app.use("/api/users", userRoute);

// Route to handle root endpoint
app.get("/", (req, res) => {
  res.json("Hello").status(200);
});

// Middleware to handle 404 Not Found errors
app.use(notFound);

// Middleware to handle other errors
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
