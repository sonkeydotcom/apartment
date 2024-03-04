import asyncHandler from "express-async-handler";
import Listing from "../models/listingModel.js";

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
  });
  const createdListing = await listing.save();

  res.json({ createdListing }).status(201);
});

export { viewListing, viewListings, createListing };
