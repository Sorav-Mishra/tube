import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  Number: {
    type: String,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("user", userSchema);
