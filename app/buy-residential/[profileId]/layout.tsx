import React from "react";
import { ReactNode } from "react";

export const metadata = {
  title: "جزئیات آگهی",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
