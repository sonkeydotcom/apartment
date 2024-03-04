import asyncHandler from "express-async-handler";

import Application from "../models/applicationModel.js";

// @desc    Create a new application
// @route   POST /api/application
// @access  Public

const createApplication = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    gender,
    dob,
    address,
    city,
    state,
    zip,
    country,
    landlord,
    landlordPhone,
    reasonForLeaving,
    monthlyRent,
    employer,
    employerPhone,
    position,
    supervisor,
    supervisorPhone,
    annualIncome,
    crimeConviction,
    bankruptcy,
    evicted,
    pets,
    smoker,
    keysAddress,
  } = req.body;

  const listing = req.params.id;

  const application = new Application({
    listing,
    name,
    email,
    phone,
    gender,
    dob,
    address,
    city,
    state,
    zip,
    country,
    landlord,
    landlordPhone,
    reasonForLeaving,
    monthlyRent,
    employer,
    employerPhone,
    position,
    supervisor,
    supervisorPhone,
    annualIncome,
    crimeConviction,
    bankruptcy,
    evicted,
    pets,
    smoker,
    keysAddress,
  });

  const createdApplication = await application.save();
  res.status(201).json(createdApplication);
});

export { createApplication };
