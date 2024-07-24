"use client";
import Link from "next/link";
import Image from "next/image";

const Friend = () => {
  return (
    <div className="w-[30%] h-fit bg-slate-50 flex text-white flex-col">
      <Link href="/profile/username">
        <div className="w-full bg-red-500 h-12 flex items-center justify-between px-3 text-md">
          <div>
            <span>ryan</span>
          </div>
          <div>
            <span>ryanb215</span>
          </div>
        </div>
        <div className="h-36 flex items-center justify-between p-3">
          <div className="h-24 w-24 rounded-full bg-red-300"></div>
          <div className="h-24 w-48 py-2 align-start h-full text-black break-words text-wrap">
            <span>biobiobiobiobiobiobiobiobiobiobiobiobiobiobio</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Friend;
