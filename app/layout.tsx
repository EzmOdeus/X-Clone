import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import News from "@/components/News";
import SessionWrapper from "@/components/SessionWrapper";
import CommentModal from "@/components/CommentModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X-Clone",
  description: "Generated by Ezmodeus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-10">
          <div className="col-span-2 ">

        <SideBar/>
          </div>
          <div className="md:col-span-6 max-md:col-span-8 p-3"> {children}</div>
            <div className="col-span-2  p-3 h-screen border-l max-md:hidden  ">
              <div className='sticky top-0 bg-white py-2'>
                <input
                  type='text'
                  placeholder='Search'
                  className='bg-gray-100 border border-gray-200 rounded-xl text-sm w-full px-4 py-2'
                ></input>
              </div><News /></div>
        </div>
          <CommentModal />
      </body>
      </html>
    </SessionWrapper>
  );
}
