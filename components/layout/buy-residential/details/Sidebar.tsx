"use client";

import React from "react";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { FaHouseChimney } from "react-icons/fa6";
import { icons } from "@/utils/icons";
import { CATEGORIES_TRANSLATE } from "@/constants";
import { e2p, sp } from "@/utils/number.utils";
import ShareButton from "./ShareButton";

export interface SidebarProps {
  realState: string;
  phone: string;
  price: number;
  constructionDate: string;
  category: string;
}

function Sidebar({
  realState,
  constructionDate,
  phone,
  price,
  category,
}: SidebarProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 bg-white p-2 rounded-md shadow-md items-center">
        <FaHouseChimney className="text-white bg-blue-800 text-4xl p-1 rounded-full" />
        <h3 className="font-semibold">{realState}</h3>
        <p className="text-slate-500 flex gap-1 items-center">
          <AiOutlinePhone className="text-lg" />
          {e2p(phone)}
        </p>
      </div>
      <ShareButton />
      <div className="flex flex-col items-center gap-3 bg-white p-2 rounded-md shadow-md">
        <p className="text-blue-800 flex gap-1 items-center text-lg">
          {icons[category]}
          <span className="text-slate-500 text-base">
            {CATEGORIES_TRANSLATE[category]}
          </span>
        </p>
        <p className="text-slate-500 flex gap-1">
          <span>{sp(price)}</span>
          تومان
        </p>
        <p className="text-blue-800 flex gap-1 items-center">
          <BsCalendarCheck />
          <span className="text-slate-500 text-sm">
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
