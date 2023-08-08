import "./globals.css";
import { YekanBakhFont } from "@/utils/fonts";
import Layout from "@/components/layout";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "خرید و فروش املاک",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={[
          YekanBakhFont.className,
          "container mx-auto lg:max-w-[1200px] bg-slate-100",
        ].join(" ")}
      >
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
