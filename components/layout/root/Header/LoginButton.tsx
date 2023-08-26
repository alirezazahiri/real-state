"use client";

import Link from "next/link";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";

function LoginButton() {
  const { data } = useSession();
  return (
    <div className="absolute top-4 lg:top-1/2 lg:-translate-y-1/2 left-2 text-xl font-bold cursor-pointer">
      <Link
        href={data ? "/dashboard" : "/signin"}
        className="flex items-center border transition text-blue-800 bg-white rounded-md p-1 gap-1 hover:bg-inherit hover:text-white"
      >
        {data ? (
          <>
            <FaUserAlt />
          </>
        ) : (
          <>
            <FiLogIn />
            <p className="text-base">ورود</p>
          </>
        )}
      </Link>
    </div>
  );
}

export default LoginButton;
