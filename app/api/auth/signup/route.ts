import { NextResponse, NextRequest } from "next/server";
import UserModel from "@/models/User.model";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/password";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password)
      return NextResponse.json(
        {
          error: "لطفا اطلاعات معتبر وارد نمایید",
        },
        {
          status: 422,
        }
      );

    const existingUser = await UserModel.findOne({ email });

    if (existingUser)
      return NextResponse.json(
        { error: "این حساب کاربری وجود دارد" },
        { status: 422 }
      );

    const hashedPassword = await hashPassword(password);

    await UserModel.create({ email, password: hashedPassword });

    return NextResponse.json({ message: "حساب کاربری با موفقیت ایجاد شد" }, {status: 201});
  } catch (error) {
    console.log((error as Error).message);

    return NextResponse.json(
      {
        error: "مشکلی در سرور رخ داده است",
      },
      {
        status: 500,
      }
    );
  }
}
