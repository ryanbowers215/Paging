"use client";
import Image from "next/image";
import Link from "next/link";

const FriendsReading = () => {
  return (
    <div className="w-full h-fit md:h-70 rounded-md flex flex-col items-center justify-between font-mono">
      {/* caption */}
      <div className=" w-full h-fit p-1 ">
        <span>Your friends are reading</span>
      </div>
      {/* middle */}
      <div className="w-full h-fit p-1 flex items-center gap-2 my-2 overflow-scroll">
        <Link href="/books/123">
          <div className="w-18 min-w-24 min-h-36 bg-white border-2 md:w-32">
            <span>cover</span>
          </div>
        </Link>
        <Link href="/books/123">
          <div className="w-18 min-w-24 min-h-36 bg-white border-2 md:w-32">
            <span>cover</span>
          </div>
        </Link>
        <Link href="/books/123">
          <div className="w-18 min-w-24 min-h-36 bg-white border-2 md:w-32">
            <span>cover</span>
          </div>
        </Link>
        <Link href="/books/123">
          <div className="w-18 min-w-24 min-h-36 bg-white border-2 md:w-32">
            <span>cover</span>
          </div>
        </Link>
        <Link href="/books/123">
          <div className="w-18 min-w-24 min-h-36 bg-white border-2 md:w-32">
            <span>cover</span>
          </div>
        </Link>
        <Link href="/books/123">
          <div className="w-18 min-w-24 min-h-36 bg-white border-2 md:w-32">
            <span>cover</span>
          </div>
        </Link>
        <Link href="/books/123">
          <div className="w-18 min-w-24 min-h-36 bg-white border-2 md:w-32">
            <span>cover</span>
          </div>
        </Link>
        <Link href="/books/123">
          <div className="w-18 min-w-24 min-h-36 bg-white border-2 md:w-32">
            <span>cover</span>
          </div>
        </Link>
        <Link href="/books/123">
          <div className="w-18 min-w-24 min-h-36 bg-white border-2 md:w-32">
            <span>cover</span>
          </div>
        </Link>
        <Link href="/books/123">
          <div className="w-18 min-w-24 min-h-36 bg-white border-2 md:w-32">
            <span>cover</span>
          </div>
        </Link>
        <Link href="/books/123">
          <div className="w-18 min-w-24 min-h-36 bg-white border-2 md:w-32">
            <span>cover</span>
          </div>
        </Link>
        <Link href="/books/123">
          <div className="w-18 min-w-24 min-h-36 bg-white border-2 md:w-32">
            <span>cover</span>
          </div>
        </Link>
        <Link href="/books/123">
          <div className="w-18 min-w-24 min-h-36 bg-white border-2 md:w-32">
            <span>cover</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FriendsReading;
