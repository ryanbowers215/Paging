import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/navbar";
import Leftbar from "./components/layout/leftbar";
import Rightbar from "./components/layout/rightbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paging",
  description: "by Ryan Bowers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-0 w-screen bg-slate-200 px-5 border-b-2 border-black z-10">
          <Navbar />
        </div>
        <div className="hidden md:block fixed left-0 h-full bg-slate-200 w-48 border-r-2 border-black z-9">
          <Leftbar />
        </div>
        <div className="hidden md:block fixed right-0 h-full bg-slate-200  w-12 border-l-2 border-black z-9">
          <Rightbar />
        </div>
        <div className="bg-white md:ml-48 md:mr-12 px-4 mt-24">{children}</div>
      </body>
    </html>
  );
}
