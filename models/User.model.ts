import { Schema, model, models } from "mongoose";

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Role,
      default: Role.USER,
    },
  },
  { timestamps: true }
);

const UserModel = models.User ?? model("User", UserSchema);

export type TUserSchema = {
  email: string;
  password: string;
  role: Role;
};
export default UserModel;
