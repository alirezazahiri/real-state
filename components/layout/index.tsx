import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-[10px] min-h-screen">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
