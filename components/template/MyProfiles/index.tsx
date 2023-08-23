import ProfileCard from "@/components/module/ProfileCard";
import UserModel from "@/models/User.model";
import { authOptions } from "@/utils/auth.options";
import { getServerSession } from "next-auth";
import React from "react";
import { Toaster } from "react-hot-toast";

async function MyProfiles() {
  const session = await getServerSession(authOptions);
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

  return (
    <>
      <div>
        <div className="flex flex-col gap-3">
          {user?.profiles.length ? (
            user?.profiles?.map(({ _id, address, category, title, price }) => (
              <ProfileCard
                key={_id}
                id={_id}
                address={address}
                category={category}
                title={title}
                price={price}
              />
            ))
          ) : (
            <p className="text-red-600 bg-red-100 rounded-md p-2 font-semibold">
              هیچ آگهی ثبت نشده است
            </p>
          )}
        </div>
      </div>
      <Toaster position="top-center" />
    </>
  );
}

export default MyProfiles;
