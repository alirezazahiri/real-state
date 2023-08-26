import React from "react";
import ResidentialDetails from "@/components/template/ResidentialDetails";
import BuyResidentialDetailsLayout from "@/components/layout/buy-residential/details";
import connectDB from "@/utils/connectDB";
import ProfileModel from "@/models/Profile.model";
import { IProfileSchema } from "@models";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth.options";
import UserModel, { Role } from "@/models/User.model";
import { data } from "autoprefixer";

interface Props {
  params: { profileId: string };
}

async function getData(
  profileId: string
): Promise<(IProfileSchema & { isAdmin: boolean }) | null> {
  await connectDB();
  const res = await ProfileModel.findOne({ _id: profileId });
  const data = JSON.parse(JSON.stringify(res));
  const session = await getServerSession(authOptions);
  if (!session) {
    if (data.published) return data;
    return null;
  } else {
    const user = await UserModel.findOne({ email: session?.user.email });
    if (data.published || (!data.published && user.role === Role.ADMIN))
      return { ...data, isAdmin: user.role === Role.ADMIN };
    return null;
  }
}

async function ResidentialDetailsPage({ params: { profileId } }: Props) {
  const data = await getData(profileId);

  if (!data)
    return (
      <h3 className="bg-red-100 text-red-500 rounded-md p-2 font-semibold mt-4">
        مشکلی پیش آمده است
      </h3>
    );

  const {
    title,
    category,
    address,
    constructionDate,
    description,
    phone,
    price,
    realState,
    rules,
    amenities,
    published,
    isAdmin,
  } = data;

  return (
    <BuyResidentialDetailsLayout
      category={category}
      constructionDate={constructionDate}
      phone={phone}
      price={price}
      realState={realState}
    >
      <ResidentialDetails
        title={title}
        address={address}
        description={description}
        rules={rules}
        amenities={amenities}
        published={published}
        isAdmin={isAdmin}
      />
    </BuyResidentialDetailsLayout>
  );
}

export default ResidentialDetailsPage;
