"use client";

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsShare } from "react-icons/bs";

function ShareButton() {
  const [url, setUrl] = useState("");

  const copyHandler = async () => {
    await navigator.clipboard
      .writeText(location.href)
      .then((_) => toast.success("لینک آگهی با موفقیت کپی شد"))
      .catch((_) => toast.error("خطایی در هنگام کپی کردن لینک پیش آمده"));
  };

  useEffect(() => {
    setUrl(location.href);
  }, []);

  return (
    <>
      <p
        className="flex gap-1 justify-center items-center text-slate-500 bg-white p-2 rounded-md shadow-md cursor-pointer"
        onClick={copyHandler}
      >
        <BsShare className="text-blue-800" />
        اشتراک گذاری
      </p>
      <Toaster position="top-center" />
    </>
  );
}

export default ShareButton;
