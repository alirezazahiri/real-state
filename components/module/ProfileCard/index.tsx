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
import { MdOutlinePublish } from "react-icons/md";

interface Props
  extends Pick<IProfileSchema, "category" | "title" | "address" | "price"> {
  id: string;
  isAdmin?: boolean;
  published?: boolean;
}

function ProfileCard({
  id,
  category,
  title,
  address,
  price,
  isAdmin,
  published,
}: Props) {
  const router = useRouter();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [publishLoading, setPublishLoading] = useState(false);

  const deleteHandler: React.EventHandler<
    React.MouseEvent<HTMLButtonElement>
  > = async (e) => {
    setDeleteLoading(true);
    const res = await fetch(`/api/profile/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    setDeleteLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

  const publishHandler: React.EventHandler<
    React.MouseEvent<HTMLButtonElement>
  > = async (e) => {
    setPublishLoading(true);
    const res = await fetch(`/api/profile/${id}/publish`, {
      method: "POST",
    });
    const data = await res.json();
    setPublishLoading(false);
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
        <div className="flex gap-1 items-center">
          <h2 className="font-bold text-lg">{title}</h2>
          {published ? (
            <span className="px-1 text-xs flex items-center font-semibold text-white bg-green-400 rounded-full">
              منتشر شده
            </span>
          ) : (
            <span className="px-1 text-xs flex items-center font-semibold text-white bg-yellow-400 rounded-full">در انتظار تایید</span>
          )}
        </div>
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
          href={`/buy-residential/${id}`}
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
        {isAdmin && (
          <button
            onClick={publishHandler}
            className="flex gap-1 items-center justify-center rounded-md border border-purple-400 hover:bg-white hover:text-purple-400 transition bg-purple-400 disabled:cursor-not-allowed text-white p-1"
            disabled={publishLoading}
          >
            {publishLoading ? (
              "در حال منتشر کردن..."
            ) : (
              <>
                انتشار
                <MdOutlinePublish />
              </>
            )}
          </button>
        )}
        <button
          onClick={deleteHandler}
          className="flex gap-1 items-center justify-center rounded-md border border-red-400 hover:bg-white hover:text-red-400 transition bg-red-400 disabled:cursor-not-allowed text-white p-1"
          disabled={deleteLoading}
        >
          {deleteLoading ? (
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
