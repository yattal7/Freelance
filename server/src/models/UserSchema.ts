import { model, Schema, Model } from "mongoose";
import { IUser } from "./interface";

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  types: { type: String, required: true },
  skills: { type: [String], required: false },
});

export const User: Model<IUser> = model("User", UserSchema);
