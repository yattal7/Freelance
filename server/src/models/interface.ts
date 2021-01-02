import { Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  author: string;
}

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  type: string;
  skills: string[];
}
