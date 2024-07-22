"use client";
import Link from "next/link";
import Image from "next/image";

const Shelf = () => {
  return (
    <div className="min-w-[31%] h-60 bg-slate-50 flex text-white flex-col">
      <div className="flex flex-col bg-red-500 cursor-pointer">
        <Link href="/shelves/123">
          <div className="w-full h-10 flex items-center px-3 text-md text-white text-lg flex justify-between items-center">
            <div>
              <span className="">Shelf Name</span>
            </div>
            <div>
              <span className="text-sm">14 Books</span>
            </div>
          </div>
          <div className="w-full  h-8 flex items-center px-3 text-sm text-gray-100">
            <span className="">Description</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-row gap-3 justify-between p-3">
        <div className="h-fit w-fit border-[1px] border-gray-500">
          <Image src="/playerpiano.jpg" width={96} height={144} alt="Book" />
        </div>
        <div className="h-fit w-fit border-[1px] border-gray-500">
          <Image src="/slaught.jpg" width={96} height={144} alt="Book" />
        </div>
        <div className="h-fit w-fit border-[1px] border-gray-500">
          <Image src="/cats.jpg" width={96} height={144} alt="Book" />
        </div>
        <div className="h-fit w-fit border-[1px] border-gray-500">
          <Image src="/sirenstitan.jpg" width={96} height={144} alt="Book" />
        </div>
      </div>
    </div>
  );
};

export default Shelf;
