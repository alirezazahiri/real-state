import ProfileModel from "@/models/Profile.model";
import UserModel, { Role } from "@/models/User.model";
import { authOptions } from "@/utils/auth.options";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log(params);

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

    if (user.role === Role.ADMIN) {
      const publishProfileResult = await ProfileModel.updateOne(
        { _id: params.id },
        {
          published: true,
        }
      );

      if (publishProfileResult.modifiedCount > 0)
        return NextResponse.json(
          {
            message: "آگهی با موفقیت منتشر شد",
          },
          {
            status: 203,
          }
        );

      return NextResponse.json(
        {
          error: "این آگهی در انتظار تایید نیست",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        error: "اجازۀ دسترسی به این عملیات را ندارید",
      },
      {
        status: 405,
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
