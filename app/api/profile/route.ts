import ProfileModel from "@/models/Profile.model";
import UserModel from "@/models/User.model";
import connectDB from "@/utils/connectDB";
import { Profile } from "@profile";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      title,
      description,
      address,
      phone,
      price,
      realState,
      constructionDate,
      category,
      amenities,
      rules,
    } = body;

    const session = await getServerSession(req);

    if (!session) {
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
        {
          status: 401,
        }
      );
    }

    const user = await UserModel.findOne({ email: session?.user.email });

    if (!user)
      return NextResponse.json(
        {
          error: "حساب کاربری یافت نشد",
        },
        {
          status: 404,
        }
      );

    if (
      !title ||
      !description ||
      !address ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        {
          error: "لطفا اطلاعات معتبر وارد کنید",
        },
        {
          status: 400,
        }
      );
    }

    const newProfile = await ProfileModel.create({
      title,
      description,
      address,
      phone,
      realState,
      constructionDate,
      category,
      amenities,
      rules,
      price: +price,
      author: new Types.ObjectId(user._id),
    });

    return NextResponse.json(
      {
        message: "آگهی جدید اضافه شد",
      },
      {
        status: 201,
      }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        error: "خطایی در سرور رخ داده است",
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.has("category")
      ? searchParams.get("category")
      : null;

    let profiles: Profile[];
    if (category)
      profiles = await ProfileModel.find(
        { category, published: true },
        { __v: 0, author: 0 }
      );
    else
      profiles = await ProfileModel.find(
        { published: true },
        { __v: 0, author: 0 }
      );

    return NextResponse.json(
      {
        message: "آگهی ها با موفقیت دریافت شدند",
        profiles,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "خطایی در سرور رخ داده است",
      },
      {
        status: 500,
      }
    );
  }
}
