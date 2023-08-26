import ProfileCard from "@/components/module/ProfileCard";
import UserModel from "@/models/User.model";
import { authOptions } from "@/utils/auth.options";
import connectDB from "@/utils/connectDB";
import { IProfileSchema, IUserSchema } from "@models";
import { getServerSession } from "next-auth";
import React from "react";
import { Toaster } from "react-hot-toast";

async function getData(): Promise<{
  error?: string;
  user?: IUserSchema & { profiles: IProfileSchema[] };
}> {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) return { error: "لطفا وارد حساب کاربری خود شوید" };
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

  if (!user) return { error: "حساب کاربری یافت نشد" };

  return { user: JSON.parse(JSON.stringify(user)) };
}

async function MyProfiles() {
  const { error, user } = await getData();

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
          {user?.profiles.length ? (
            user?.profiles?.map(
              ({ _id, address, category, title, price, published }) => (
                <ProfileCard
                  key={_id}
                  id={_id}
                  address={address}
                  category={category}
                  title={title}
                  price={price}
                  published={published}
                />
              )
            )
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
