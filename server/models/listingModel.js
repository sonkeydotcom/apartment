import mongoose from "mongoose";

const listingSchema = mongoose.Schema({
  title: { type: String, required: true },
  rent: { type: String, required: true },
  beds: { type: String, required: true },
  baths: { type: String, required: true },
  sqft: { type: String },
  location: { type: String, required: true },
  description: { type: String },
  utilities: { type: Array, required: true },
  appliances: { type: Array },
  amenities: { type: Array },
  availability: { type: String, required: true },
  fee: { type: String },
  deposit: { type: String, required: true },
  leaseLength: { type: Number },
  pets: { type: Boolean },
  showing: { type: Boolean, default: false },
  parking: { type: String },
  laundry: { type: String },
  images: [{ type: String }],
});
const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
