import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  createdAt: { type: String, default: Date.now() },
});

export default model("users", UserSchema);
