import ProfileModel from "@/models/Profile.model";
import UserModel from "@/models/User.model";
import { authOptions } from "@/utils/auth.options";
import connectDB from "@/utils/connectDB";
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

    const session = await getServerSession(authOptions);

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
    console.log(e)
    return NextResponse.json(
      {
        error: "خطایی در سرور رخ داده است",
      },
      { status: 500 }
    );
  }
}
