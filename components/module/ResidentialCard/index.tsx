import { icons } from "@/utils/icons";
import { IProfileSchema } from "@models";
import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { ImPriceTags } from "react-icons/im";
import { BiLeftArrowAlt } from "react-icons/bi";
import { sp } from "@/utils/number.utils";
import Link from "next/link";

interface Props
  extends Pick<IProfileSchema, "category" | "title" | "address" | "price"> {
  id?: string;
}

function ResidentialCard({ address, category, id, price, title }: Props) {
  return (
    <div className="flex flex-col gap-4 border border-blue-600 p-2 rounded-md shadow-md">
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-xl bg-blue-100 w-fit p-1 rounded-sm text-blue-600">
          {icons[category]}
        </span>
        <h2 className="font-semibold text-base">{title}</h2>
        <p className="flex gap-1 text-sm items-center text-slate-500">
          <span className="font-semibold text-base flex gap-1">
            <TfiLocationPin />
          </span>
          {address}
        </p>
        <p className="flex gap-1 text-sm items-center text-slate-500">
          <span className="font-semibold text-base flex gap-1">
            <ImPriceTags />
          </span>
          {sp(price)} تومان
        </p>
      </div>
      <Link
        href={`/buy-residential/${id}`}
        className="text-blue-600 flex justify-between items-center mt-auto hover:underline hover:underline-offset-4"
      >
        مشاهده آگهی
        <BiLeftArrowAlt className="text-lg" />
      </Link>
    </div>
  );
}

export default ResidentialCard;
