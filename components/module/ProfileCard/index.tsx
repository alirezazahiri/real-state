"use client";

import { icons } from "@/utils/icons";
import { sp } from "@/utils/number.utils";
import { IProfileSchema } from "@models";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { TfiLocationPin } from "react-icons/tfi";
import { RiPriceTagLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Props
  extends Pick<IProfileSchema, "category" | "title" | "address" | "price"> {
  id: string;
}

function ProfileCard({ id, category, title, address, price }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const deleteHandler: React.EventHandler<
    React.MouseEvent<HTMLButtonElement>
  > = async (e) => {
    setLoading(true);
    const res = await fetch(`/api/profile/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);      
      router.refresh();
    }
  };

  return (
    <div className="p-4 text-blue-600 border border-blue-400 rounded-md shadow-md shadow-blue-200 flex flex-col md:flex-row md:items-center justify-between tracking-wide bg-white mx-1 md:mx-0">
      <div className="flex flex-col gap-2 border-b pb-2 mb-4 md:border-none md:border-l md:basis-1/2 items-center md:items-start">
        <span className="font-semibold text-xl bg-blue-100 w-fit p-1 rounded-sm ">
          {icons[category]}
        </span>
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="flex gap-1 text-sm items-center">
          <span className="font-semibold text-base flex gap-1">
            <TfiLocationPin />
            آدرس:
          </span>
          {address}
        </p>
        <p className="flex gap-1 text-sm items-center">
          <span className="font-semibold text-base flex gap-1">
            <RiPriceTagLine />
            قیمت:
          </span>{" "}
          {sp(price)} تومان
        </p>
      </div>
      <div className="flex md:flex-col gap-2 basis-1/2 justify-start">
        <Link
          href={`/dashboard/my-profiles/${id}`}
          className="flex gap-1 items-center justify-center rounded-md border border-blue-400 hover:bg-white hover:text-blue-400 transition bg-blue-400 text-white p-1"
        >
          مشاهده
          <AiOutlineEye />
        </Link>
        <Link
          href={`/dashboard/my-profiles/${id}/edit`}
          className="flex gap-1 items-center justify-center rounded-md border border-green-400 hover:bg-white hover:text-green-400 transition bg-green-400 text-white p-1"
        >
          ویرایش
          <FiEdit />
        </Link>
        <button
          onClick={deleteHandler}
          className="flex gap-1 items-center justify-center rounded-md border border-red-400 hover:bg-white hover:text-red-400 transition bg-red-400 disabled:cursor-not-allowed text-white p-1"
          disabled={loading}
        >
          {loading ? (
            "در حال حذف کردن..."
          ) : (
            <>
              حذف
              <GoTrash />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
