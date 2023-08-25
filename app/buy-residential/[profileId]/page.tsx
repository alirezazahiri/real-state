import React from "react";
import ResidentialDetails from "@/components/template/ResidentialDetails";
import BuyResidentialDetailsLayout from "@/components/layout/buy-residential/details";
import connectDB from "@/utils/connectDB";
import ProfileModel from "@/models/Profile.model";
import { IProfileSchema } from "@models";

interface Props {
  params: { profileId: string };
}

async function ResidentialDetailsPage({ params: { profileId } }: Props) {
  await connectDB();
  const data = await ProfileModel.findOne({ _id: profileId });

  if (!data)
    return (
      <h3 className="bg-red-100 text-red-500 rounded-md p-2 font-semibold mt-4">
        مشکلی پیش آمده است {profileId}
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
  } = JSON.parse(JSON.stringify(data)) as IProfileSchema;

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
      />
    </BuyResidentialDetailsLayout>
  );
}

export default ResidentialDetailsPage;
