"use client";

import Link from "next/link";
import React, { useState } from "react";
import BurgerIcon from "./BurgerIcon";

function BurgerMenu({ links }: { links: { name: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex lg:hidden">
        <BurgerIcon toggle={() => setIsOpen((prev) => !prev)} isOpen={isOpen} />
      </div>
      <nav className="container justify-between mx-auto bg-inherit transition-all">
        <ul
          className={
            (isOpen ? "flex flex-col" : "hidden") +
            " lg:flex gap-4 lg:bg-inherit mt-2 transition-transform"
          }
        >
          {links.map((link, index) => (
            <li
              key={link.href}
              className="animate-fade-in-x opacity-0 transition text-slate-200 hover:text-white lg:animate-none lg:opacity-100"
              style={{ animationDelay: `${0.03 + index * 0.05}s` }}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default BurgerMenu;
