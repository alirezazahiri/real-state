import { Schema, models, model } from "mongoose";

enum Category {
  villa = "villa",
  apartment = "apartment",
  store = "store",
  office = "office",
}

const ProfileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    realState: {
      type: String,
      required: true,
    },
    constructionDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      enum: Category,
      required: true,
    },
    amenities: {
      type: [String],
      default: [],
    },
    rules: {
      type: [String],
      default: [],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const ProfileModel = models.Profile ?? model("Profile", ProfileSchema);

export type TProfileSchema = {
  _id: string;
  title: string;
  description: string;
  address: string;
  phone: string;
  price: number;
  realState: string;
  constructionDate: string;
  category: string;
  amenities: string[];
  rules: string[];
  author: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export default ProfileModel;
