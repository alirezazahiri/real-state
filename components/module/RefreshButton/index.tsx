"use client";

import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

function RefreshButton() {
  const router = useRouter();

  const refreshHandler = () => {
    router.refresh();
    toast.loading("در حال به روز رسانی", { duration: 1000 });
  };

  return (
    <button
      onClick={refreshHandler}
      className="bg-blue-600 hover:bg-blue-800 text-blue-100 hover:text-white p-2 rounded-md"
    >
      به روز رسانی
    </button>
  );
}

export default RefreshButton;
