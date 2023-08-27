import Prompt from "@/components/module/Prompt";
import ResidentialCard from "@/components/module/ResidentialCard";
// import ProfileModel from "@/models/Profile.model";
import { IProfileSchema } from "@models";
// import { Profile } from "@profile";
import React from "react";

interface Props {
  category: string;
}

async function getData(
  category?: string
): Promise<{ message?: string; error?: string; profiles?: IProfileSchema[] }> {
  const res = await fetch(
    `${process.env.BASE_URL}/api/profile${
      category ? `?category=${category}` : ""
    }`,
    {
      // next: {
      //   revalidate: 60 * 60, // every 1 hour
      // },
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
  // let profiles: Profile[];
  // if (category)
  //   profiles = await ProfileModel.find({ category }, { __v: 0, author: 0 });
  // else profiles = await ProfileModel.find({}, { __v: 0, author: 0 });

  // return JSON.parse(JSON.stringify(profiles));
}

async function BuyResidentials({ category }: Props) {
  const data = await getData(category);

  if (data.error) return <Prompt color="red" message={data.error} />;

  if (data?.profiles.length)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-x-20 gap-x-10">
        {data.profiles.map(({ _id, address, category, price, title }) => (
          <ResidentialCard
            key={_id}
            id={_id}
            address={address}
            category={category}
            price={price}
            title={title}
          />
        ))}
      </div>
    );

  return (
    <h3 className="bg-red-100 text-red-500 rounded-md p-2 font-semibold">
      هیچ آگهی پیدا نشد
    </h3>
  );
}

export default BuyResidentials;
