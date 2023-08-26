import ProfileCard from "@/components/module/ProfileCard";
import ProfileModel from "@/models/Profile.model";
import UserModel, { Role } from "@/models/User.model";
import { authOptions } from "@/utils/auth.options";
import { IProfileSchema } from "@models";
import { getServerSession } from "next-auth";
import React from "react";
import { Toaster } from "react-hot-toast";

async function getData(): Promise<{
  error?: string;
  profiles?: IProfileSchema[];
}> {
  const session = await getServerSession(authOptions);
  if (!session) return { error: "لطفا وارد حساب کاربری خود شوید" };
  const user = await UserModel.findOne({ email: session?.user.email });
  if (!user) return { error: "حساب کاربری یافت نشد" };
  if (user.role === Role.ADMIN) {
    const pendingProfiles = await ProfileModel.find({ published: false });
    return { profiles: JSON.parse(JSON.stringify(pendingProfiles)) };
  }
  return { error: "اجازۀ دسترسی به این عملیات را ندارید" };
}

async function PendingProfiles() {
  const { error, profiles } = await getData();

  if (error)
    return (
      <h3 className="bg-red-100 text-red-500 rounded-md p-2 font-semibold">
        {error}
      </h3>
    );

  return (
    <>
      <div>
        <div className="flex flex-col gap-3">
          {profiles.length ? (
            profiles?.map(({ _id, address, category, title, price }) => (
              <ProfileCard
                key={_id}
                id={_id}
                address={address}
                category={category}
                title={title}
                price={price}
                isAdmin={true}
              />
            ))
          ) : (
            <p className="text-red-600 bg-red-100 rounded-md p-2 font-semibold">
              هیچ آگهی در انتظار تاییدی وجود ندارد
            </p>
          )}
        </div>
      </div>
      <Toaster position="top-center" />
    </>
  );
}

export default PendingProfiles;
