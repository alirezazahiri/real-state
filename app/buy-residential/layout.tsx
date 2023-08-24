import BuyResidentialLayout from "@/components/layout/buy-residential";
import React from "react";
import { ReactNode } from "react";

export const metadata = {
  title: "آگهی ها",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <BuyResidentialLayout>{children}</BuyResidentialLayout>;
}
