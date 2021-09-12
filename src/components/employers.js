const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employerSchema = new Schema(
  {
    ID: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Field: {
      type: String,
      required: true,
    },
    Avg_Rate: {
      type: float,
      required: false,
    },
    Location: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Number: {
      type: long,
      required: true,
    },
    Rating: {
      type: Int,
      required: false,
    },
    Ag: {
      type: Int,
      required: true,
    },
  },
  { timestamps: true }
);

const Employer = mongoose.model("Employer", employerSchema);
module.exports = Employer;
