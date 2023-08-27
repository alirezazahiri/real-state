import { NextRequest, NextResponse } from "next/server";
import ProfileModel from "@/models/Profile.model";
import UserModel from "@/models/User.model";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";

interface Options {
  params: { id: string };
}

export async function GET(req: NextRequest, { params }: Options) {
  try {
    await connectDB();

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

    const profile = await ProfileModel.findOne({ _id: params.id });

    return NextResponse.json(
      {
        message: "آگهی با موفقیت دریافت شد",
        profile,
      },
      {
        status: 200,
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

export async function PATCH(req: NextRequest, { params }: Options) {
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

    const newProfile = await ProfileModel.updateOne(
      { author: user._id, _id: params.id },
      {
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
        published: false,
      }
    );

    if (newProfile.modifiedCount > 0)
      return NextResponse.json(
        {
          message: "آگهی با موفقیت ویرایش شد",
        },
        {
          status: 202,
        }
      );

    return NextResponse.json({ error: "آگهی یافت نشد" }, { status: 404 });
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

export async function DELETE(req: NextRequest, { params }: Options) {
  try {
    await connectDB();

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

    const deletedProfile = await ProfileModel.deleteOne({
      author: user._id,
      _id: params.id,
    });

    if (deletedProfile.deletedCount > 0)
      return NextResponse.json(
        {
          message: "آگهی با موفقیت حذف شد",
        },
        {
          status: 202,
        }
      );

    return NextResponse.json({ error: "آگهی یافت نشد" }, { status: 404 });
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
