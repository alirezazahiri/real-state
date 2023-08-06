import Link from "next/link";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import BurgerMenu from "./BurgerMenu";

const links = [
  { href: "/", name: "صفحه اصلی" },
  { href: "/buy-residential", name: "آگهی ها" },
];

function Header() {
  return (
    <header className="relative bg-blue-800 transitionfont-bold px-2 py-3 lg:px-4 rounded-b-md">
      <BurgerMenu links={links} />
      <div className="absolute top-4 lg:top-1/2 lg:-translate-y-1/2 left-2 text-xl font-bold cursor-pointer">
        <Link
          href={"/signin"}
          className="flex items-center border transition text-blue-800 bg-white rounded-md p-1 gap-1 hover:bg-inherit hover:text-white"
        >
          <FiLogIn />
          <p className="text-base">ورود</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
