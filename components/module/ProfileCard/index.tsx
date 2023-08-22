import { icons } from "@/utils/icons";
import { IProfileSchema } from "@models";
import React from "react";

interface Props extends Pick<IProfileSchema, "category" | "title" | "address"> {
  username: string;
}

function ProfileCard({ category, title, address, username }: Props) {
  return (
    <div className="p-4 text-blue-600 border border-blue-400 rounded-md shadow-md shadow-blue-200 flex justify-between tracking-wide bg-white">
      <div className="flex flex-col gap-2 basis-1/2">
        <span className="font-semibold text-xl">{icons[category]}</span>
        <h2 className="font-bold text-lg">{title}</h2>
        <p>
          <span className="font-semibold">آدرس:</span> {address}
        </p>
        <p>
          <span className="font-semibold">صاحب ملک:</span> {username}
        </p>
      </div>
      <div className="flex flex-col gap-2 basis-1/2 justify-end">
        <button className="rounded-md border border-green-400 hover:bg-white hover:text-green-400 transition bg-green-400 text-white py-1">
          ویرایش
        </button>
        <button className="rounded-md border border-red-400 hover:bg-white hover:text-red-400 transition bg-red-400 text-white py-1">
          حذف
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
