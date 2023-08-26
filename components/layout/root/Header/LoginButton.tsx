import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth.options";

async function LoginButton() {
  const session = await getServerSession(authOptions);

  return (
    <div className="absolute top-4 lg:top-1/2 lg:-translate-y-1/2 left-2 text-xl font-bold cursor-pointer">
      <Link
        href={session ? "/dashboard" : "/signin"}
        className="flex items-center border transition text-blue-800 bg-white rounded-md p-1 gap-1 hover:bg-inherit hover:text-white"
      >
        {session ? (
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
