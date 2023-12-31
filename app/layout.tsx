import "./globals.css";
import { YekanBakhFont } from "@/utils/fonts";
import RootLayout from "@/components/layout/root";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "خرید و فروش املاک",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={[
          YekanBakhFont.className,
          "container mx-auto lg:max-w-[1200px] bg-slate-100 px-1 lg:px-0",
        ].join(" ")}
      >
        <NextAuthProvider>
          <RootLayout>{children}</RootLayout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
