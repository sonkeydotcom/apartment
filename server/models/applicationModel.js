import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },

  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: String,
  },
  country: {
    type: String,
  },
  landlord: {
    type: String,
  },
  landlordPhone: {
    type: String,
  },
  reasonForLeaving: {
    type: String,
  },
  monthlyRent: {
    type: Number,
  },
  employer: {
    type: String,
  },
  employerPhone: {
    type: String,
  },
  position: {
    type: String,
  },
  supervisor: {
    type: String,
  },
  supervisorPhone: {
    type: String,
  },
  annualIncome: {
    type: Number,
  },
  crimeConviction: {
    type: Boolean,
    default: false,
  },
  evicted: {
    type: Boolean,
    default: false,
  },
  pets: {
    type: Boolean,
    default: false,
  },
  smoker: {
    type: Boolean,
    default: false,
  },
  keysAddress: {
    type: String,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paymentMethod: {
    type: String,
  },
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
  },
});

const Application = mongoose.model("Application", applicationSchema);

export default Application;
