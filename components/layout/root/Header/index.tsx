import Link from "next/link";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import BurgerMenu from "./BurgerMenu";
import LoginButton from "./LogInButton";

const links = [
  { href: "/", name: "صفحه اصلی" },
  { href: "/buy-residential", name: "آگهی ها" },
];

function Header() {
  return (
    <header className="sticky top-1 bg-blue-800 transitionfont-bold px-2 py-3 lg:px-4 rounded-md z-10">
      <BurgerMenu links={links} />
      <LoginButton />
    </header>
  );
}

export default Header;
