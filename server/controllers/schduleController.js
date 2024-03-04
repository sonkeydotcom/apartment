import asyncHandler from "express-async-handler";
import Schedule from "../models/scheduleModel.js";

// @desc    Create a new schedule
// @route   POST /api/schedule
// @access  Public
const createSchedule = asyncHandler(async (req, res) => {
  const { name, email, phone, date, time } = req.body;

  const listing = req.params.id;

  const schedule = new Schedule({
    name,
    email,
    phone,
    date,
    time,
    listing,
  });

  if (!name || !email || !phone || !date || !time || !listing) {
    res.status(400);
    throw new Error("Invalid schedule data");
  }

  const createdSchedule = await schedule.save();
  res.status(201).json(createdSchedule);
});

export { createSchedule };
