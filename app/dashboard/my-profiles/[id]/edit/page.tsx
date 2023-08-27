import Prompt from "@/components/module/Prompt";
import EditProfile from "@/components/template/EditProfile";
import ProfileModel from "@/models/Profile.model";
import UserModel from "@/models/User.model";
import { authOptions } from "@/utils/auth.options";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import React from "react";

interface Props {
  params: { id: string };
}

async function ProfileEditPage({ params }: Props) {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await UserModel.findOne({ email: session?.user.email });
  const profile = await ProfileModel.findOne(
    { _id: params.id, author: user?._id },
    { _id: 0, __v: 0, updatedAt: 0, createdAt: 0, author: 0 }
  );
  if (!profile)
    return (
      <Prompt
        color="red"
        message="مشکلی در پیدا کردن آگهی پیش آمده است، لطفا دوباره تلاش کنید..."
      />
    );

  return (
    <EditProfile id={params.id} profile={JSON.parse(JSON.stringify(profile))} />
  );
}

export default ProfileEditPage;
