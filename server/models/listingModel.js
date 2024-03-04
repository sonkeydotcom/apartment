import mongoose from "mongoose";

const listingSchema = mongoose.Schema({
  title: { type: String, required: true },
  rent: { type: String, required: true },
  beds: { type: Number, required: true },
  baths: { type: Number, required: true },
  sqft: { type: Number },
  location: { type: String, required: true },
  description: { type: String },
  utilities: { type: Array, required: true },
  appliances: { type: Array },
  amenities: { type: Array },
  availability: { type: String, required: true },
  fee: { type: Number, required: true },
  deposit: { type: Number, required: true },
  leaseLength: { type: Number, required: true },
  pets: { type: Boolean, required: true },
});
const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
