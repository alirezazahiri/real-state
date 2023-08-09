import DashboardLayout from "@/components/layout/dashboard";
import React from "react";
import { ReactNode } from "react";

export const metadata = {
    title: "پنل کاربری | داشبورد",
    description: "سایت خرید و فروش املاک",
    icons: { icon: "./favicon.ico" },
  };

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout>{children}</DashboardLayout>
  );
}

