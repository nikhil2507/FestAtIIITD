const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const MemberSchema = new Schema(
  {
    memberName: String,
    email: String,
    roll: String,
    position: String,
    eventName: String,
  },
  {
    timestamps: true,
  }
);

// Model
const Members = mongoose.model("Members", MemberSchema);

// Exports
module.exports = Members;