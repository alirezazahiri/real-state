import { Schema, model, models } from "mongoose";

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
  },
  { timestamps: true }
);

const UserModel = models.User ?? model("User", UserSchema);

export type TUserSchema = {
  email: string,
  password: string,
};
export default UserModel;
