import mongoose from "mongoose";

const schema = mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  count: { type: Number, required: true },
  city: { type: String, required: true },
  date: { type: Date, default: Date.now },
  coordinate: { type: Object, required: true },
});

const User = mongoose.model("User", schema);

export default User;
