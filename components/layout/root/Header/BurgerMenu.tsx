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
      <nav className="container justify-between mx-auto bg-inherit">
        <ul
          className={
            (isOpen ? "flex flex-col lg:flex-row" : "hidden") +
            " lg:flex gap-4  mt-2 pr-2 md:pr-0 md:mt-0 transition-all"
          }
        >
          {links.map((link, index) => (
            <li
              key={link.href}
              className="animate-fade-in-x opacity-0 transition-all text-slate-200 hover:text-white lg:animate-none lg:opacity-100 w-fit underline-offset-4 hover:underline"
              style={{ animationDelay: `${0.01 + index * 0.005}s` }}
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
