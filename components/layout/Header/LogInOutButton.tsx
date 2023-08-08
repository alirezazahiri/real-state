"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { FiLogIn/*, FiLogOut */ } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

function LogInOutButton() {
  const { data } = useSession();

//   const logOutHandler = async () => {
//     await signOut();
//   };
  return (
    <div className="absolute top-4 lg:top-1/2 lg:-translate-y-1/2 left-2 text-xl font-bold cursor-pointer">
        <Link
          href={data ? "/dashboard" : "/signin"}
          className="flex items-center border transition text-blue-800 bg-white rounded-md p-1 gap-1 hover:bg-inherit hover:text-white"
        >
      {data ? (
        // <button
        //   onClick={logOutHandler}
        //   className="flex items-center border transition text-blue-800 bg-white rounded-md p-1 gap-1 hover:bg-inherit hover:text-white"
        // >
        //   <p className="text-base">خروج</p>
        //   <FiLogOut />
        // </button>
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

export default LogInOutButton;
