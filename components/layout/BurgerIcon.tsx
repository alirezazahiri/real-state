import React from "react";

const genericHamburgerLine = `h-1 w-6 my-[2px] rounded-full bg-white transition ease transform duration-300`;

function BurgerIcon({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div>
      <button
        className="flex flex-col h-10 w-10 rounded justify-center items-center group"
        onClick={toggle}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-2 opacity-75 group-hover:opacity-100"
              : "opacity-75 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-75 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-2 opacity-75 group-hover:opacity-100"
              : "opacity-75 group-hover:opacity-100"
          }`}
        />
      </button>
    </div>
  );
}

export default BurgerIcon;
