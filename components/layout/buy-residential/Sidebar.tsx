"use client";

import { CATEGORIES } from "@/constants";
import Link from "next/link";
import React from "react";
import { HiFilter } from "react-icons/hi";
import { useSearchParams } from "next/navigation";

function Sidebar() {
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col gap-3 bg-white p-2 rounded-md shadow-md">
      <h3 className="text-black font-semibold text-center flex gap-1">
        <HiFilter className="text-blue-800" />
        دسته بندی
      </h3>
      <ul className="pr-2 flex justify-center gap-2 lg:flex-col">
        {[{ category: null, title: "همه" }, ...CATEGORIES].map(
          ({ category, title }) => (
            <Link
              href={`/buy-residential${
                category ? `?category=${category}` : ""
              }`}
            >
              <li
                className={`hover:underline hover:underline-offset-4 bg-slate-100 rounded-full p-1 px-3 w-fit ${
                  searchParams.get("category") === category &&
                  "underline underline-offset-4"
                }`}
              >
                {title}
              </li>
            </Link>
          )
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
