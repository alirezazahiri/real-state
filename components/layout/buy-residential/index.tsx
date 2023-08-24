import React from "react";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";

function BuyResidentialLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:py-10">
      <div className="lg:basis-2/12">
        <Sidebar />
      </div>
      <div className="basis-9/12 lg:basis-10/12">{children}</div>
    </div>
  );
}

export default BuyResidentialLayout;
