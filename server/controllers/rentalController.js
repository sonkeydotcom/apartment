import asyncHandler from "express-async-handler";
import multer from "multer";
import Listing from "../models/listingModel.js";
import AWS from "aws-sdk";

const viewListings = asyncHandler(async (req, res) => {
  const listings = await Listing.find({});

  if (!listings) {
    res.status(404);
    throw new Error("No listings found");
  }
  res.json({ listings }).status(200);
});

const viewListing = asyncHandler(async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    res.status(404);
    throw new Error("Listing not found");
  }
  res.json({ listing }).status(200);
});

const createListing = asyncHandler(async (req, res) => {
  const {
    title,
    rent,
    beds,
    baths,
    sqft,
    location,
    description,
    utilities,
    appliances,
    amenities,
    availability,
    fee,
    deposit,
    leaseLength,
    pets,
  } = req.body;

  if (
    !title ||
    !rent ||
    !beds ||
    !baths ||
    !sqft ||
    !location ||
    !description ||
    !utilities ||
    !appliances ||
    !amenities ||
    !availability ||
    !fee ||
    !deposit ||
    !leaseLength ||
    !pets
  ) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const images = req.files.map((file) => {
    return file.location;
  });

  // Configure AWS SDK with your credentials
  AWS.config.update({
    accessKeyId: env.process.MY_AWS_ACCESS_KEY_ID,
    secretAccessKey: env.process.MY_AWS_SECRET_ACCESS_KEY,
  });

  const s3 = new AWS.S3();

  // Upload images to S3
  const promises = req.files.map(async (file) => {
    const params = {
      Bucket: "apartbucket",
      Key: `${Date.now()}-${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    return s3.upload(params).promise();
  });

  const uploadedImages = await Promise.all(promises);

  const imageUrls = uploadedImages.map((data) => data.Location);

  const listing = new Listing({
    title,
    rent,
    beds,
    baths,
    sqft,
    location,
    description,
    utilities,
    appliances,
    amenities,
    availability,
    fee,
    deposit,
    leaseLength,
    pets,
    images: imageUrls,
  });

  const createdListing = await listing.save();

  res.json({ createdListing }).status(201);
});

export { viewListing, viewListings, createListing };
