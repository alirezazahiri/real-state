"use client";

import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { ThreeDots } from "react-loader-spinner";

function LogoutButton() {
  const clickHandler = async () => {
    await signOut();
  };

  return (
    <button
      onClick={clickHandler}
      className="text-red-600 flex items-center gap-1 font-semibold w-fit transition hover:bg-red-100 rounded-md p-1"
    >
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
