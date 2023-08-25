import React from "react";
import { TfiLocationPin } from "react-icons/tfi";

interface Props {
  title: string;
  address: string;
  description: string;
  amenities: string[];
  rules: string[];
}

function ResidentialDetails({
  title,
  address,
  description,
  amenities,
  rules,
}: Props) {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-lg text-blue-700">{title}</h2>
        <p className="flex gap-1 text-slate-500">
          <TfiLocationPin />
          {address}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-semibold text-lg text-blue-700">توضیحات</h2>
          <hr className="h-[2px] rounded-full bg-slate-200" />
        </div>
        <p>{description}</p>
      </div>
      {amenities.length ? (
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-semibold text-lg text-blue-700">امکانات</h2>
            <hr className="h-[2px] rounded-full bg-slate-200" />
          </div>
          <ul>
            {amenities.map((amenity) => (
              <li
                key={amenity}
                className="marker:text-blue-800 list-disc list-inside"
              >
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
      {rules.length ? (
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-semibold text-lg text-blue-700">قوانین</h2>
            <hr className="h-[2px] rounded-full bg-slate-200" />
          </div>
          <ul>
            {rules.map((rule) => (
              <li
                key={rule}
                className="marker:text-blue-800 list-disc list-inside"
              >
                {rule}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}

export default ResidentialDetails;

export const metadata = {
  title: "جزئیات آگهی",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};
