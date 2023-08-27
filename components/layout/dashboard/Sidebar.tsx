import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "./LogoutButton";
import connectDB from "@/utils/connectDB";
import UserModel, { Role } from "@/models/User.model";
import Prompt from "@/components/module/Prompt";

async function Sidebar() {
  const session = await getServerSession();

  await connectDB();
  const user = await UserModel.findOne(
    { email: session?.user.email },
    { role: 1 }
  );

  if (!user) return <Prompt color="red" message="مشکلی پیش آمده است" />;

  const { role } = user;

  return (
    <div className="flex flex-col bg-white shadow-md rounded-md p-4">
      <div className="flex flex-col gap-4 justify-between items-center pb-2 border-b-2 border-slate-200">
        <div className="flex flex-col items-center gap-1">
          <CgProfile className="text-blue-800 text-5xl" />
          {role === Role.ADMIN && (
            <p className="font-semibold text-slate-500">ادمین</p>
          )}
        </div>
        <p className="font-semibold text-slate-500">{session?.user.email}</p>
      </div>
      <div className="py-6">
        <ul className="[&>li]:w-fit [&>li>*]:font-semibold transition [&>li:hover]:underline underline-offset-4 flex flex-col gap-2">
          <li>
            <Link href="/dashboard">حساب کاربری</Link>
          </li>
          <li>
            <Link href="/dashboard/my-profiles">آگهی های من</Link>
          </li>
          <li>
            <Link href="/dashboard/add">ثبت آگهی</Link>
          </li>
          {role === Role.ADMIN && (
            <li>
              <Link href="/dashboard/pending">در انتظار تایید</Link>
            </li>
          )}
        </ul>
      </div>
      <LogoutButton />
    </div>
  );
}

export default Sidebar;
