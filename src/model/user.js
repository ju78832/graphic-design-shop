import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerify: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
  verifyTokenDate: Date,
  forgetToken: String,
  forgetTokenDate: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
