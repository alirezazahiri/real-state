import React from "react";
import Sidebar, { SidebarProps } from "./Sidebar";

interface Props extends SidebarProps {
  children: React.ReactNode;
}

function BuyResidentialDetailsLayout({ children, ...rest }: Props) {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 md:py-10">
      <div className="lg:basis-2/12">
        <Sidebar {...rest} />
      </div>
      <div className="basis-9/12 lg:basis-10/12">{children}</div>
    </div>
  );
}

export default BuyResidentialDetailsLayout;
