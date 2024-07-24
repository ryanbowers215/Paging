"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
  const { username } = useParams();
  const [isFollow, setIsFollow] = useState(false);
  return (
    <div className="w-full h-72 flex items-center gap-4 p-4">
      <div className="min-w-60 min-h-60 max-h-60 max-w-60 rounded-full bg-red-500 overflow-hidden flex justify-center items-center">
        <Image src="/pfp.jpeg" width={240} height={240} alt="Book" />
      </div>
      <div className="flex flex-col w-full min-h-60 bg-slate-50">
        <div className="flex justify-between w-full p-4 bg-red-500">
          <span className="text-2xl text-white">Ryan</span>
          <span className="text-xl text-white">@ryanb215</span>
        </div>
        <div className="flex justify-between w-full p-4 break-words text-wrap">
          <div className=" flex flex-col justify-between ">
            <div className="text-lg text-red-500">
              BioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBioBio
            </div>
            <div className="flex flex-col gap-2">
              <div
                className={`text-lg text-white w-32 h-12 flex items-center justify-center bg-red-500 rounded-full cursor-pointer z-10 ${
                  isFollow ? "rotate-[360deg]" : ""
                } ease-in-out duration-500`}
                onClick={() => setIsFollow(!isFollow)}
              >
                <span>{isFollow ? "Following" : "Follow"}</span>
              </div>
              <div className="text-md text-gray-500 flex gap-2 z-0">
                <div className="cursor-pointer">1 Follower</div>
                <div className="cursor-pointer">1 Following</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-0 justify-center">
            <div className="text-xs text-gray-500 text-center">
              Favorite Book
            </div>
            <div className="h-fit w-fit">
              <Link href="/books/123">
                <Image
                  src="/sirenstitan.jpg"
                  width={110}
                  height={165}
                  alt="Book"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
