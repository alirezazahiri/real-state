import ProfileModel from "@/models/Profile.model";
import UserModel from "@/models/User.model";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
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

    // const user = await UserModel.findOne({ email: session?.user.email });

    // if (!user) {
    //   return NextResponse.json(
    //     {
    //       error: "حساب کاربری یافت نشد",
    //     },
    //     {
    //       status: 404,
    //     }
    //   );
    // }

    // const profiles = await ProfileModel.find({ author: user._id });
    const [user] = await UserModel.aggregate([
      { $match: { email: session?.user.email } },
      {
        $lookup: {
          from: "profiles",
          foreignField: "author",
          localField: "_id",
          as: "profiles",
        },
      },
    ]);

    return NextResponse.json(
      {
        message: "آگهی ها با موفقت دریافت شد",
        user,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "خطایی در سرور رخ داده است",
      },
      { status: 500 }
    );
  }
}
