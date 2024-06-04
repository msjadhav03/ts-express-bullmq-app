
import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
});

export default mongoose.model<IUser>("User", userSchema);
