"use client";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const StatusUpdate = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="w-full h-fit md:h-70 bg-slate-50 flex flex-col items-center justify-between">
      {/* top */}
      <div className=" w-full h-12 text-lg px-3 bg-red-500 text-white flex items-center">
        <span>Ryan is on page 153 of 341 of Player Piano</span>
      </div>
      {/* middle */}
      <div className="w-full h-fit px-3 min-h-36 p-1 flex flex-row items-center my-2">
        <Link href="/books/123">
          <div className=" h-fit w-fit border-[1px] border-gray-500">
            <Image src="/playerpiano.jpg" width={96} height={144} alt="Book" />
          </div>
        </Link>
        <div className="w-[66%] h-full md:w-64 min-h-36 bg-slate-50 flex flex-col px-6 items-start justify-around p-2">
          <div className="">
            <div className="text-base text-black">Player Piano</div>
            <div className="text-sm text-slate-400">Kurt Vonnegut Jr.</div>
          </div>
          <div className="text-amber-500">
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
          </div>
          <div className="text-wrap w-full h-fit">
            <span>Caption</span>
          </div>
        </div>
      </div>
      {/* progress bar */}
      <div className="w-full px-3 h-[15%] p-1 min-h-8 flex flex-row items-center justify-between gap-2 font-mono">
        <div className="text-sm text-slate-400">Progress</div>
        <div className="w-full bg-slate-200 rounded-sm h-2.5">
          <div
            className="bg-red-500 h-2.5 rounded-sm"
            style={{ width: "45%" }}
          ></div>
        </div>
        <div className="text-sm text-slate-400">45%</div>
      </div>

      {/* bottom */}
      <div className="bg-gray-200 text-red-500 w-full h-8 flex flex-row items-center justify-between text-center text-sm cursor-pointer font-mono">
        {/* like button */}
        <div
          className=" h-full w-1/3 border-r-2 border-white flex items-center justify-center gap-2 hover:text-red-800"
          onClick={() => setIsLiked(!isLiked)}
        >
          <div
            className={`${
              isLiked ? "rotate-[360deg]" : ""
            } ease-in-out duration-200`}
          >
            {isLiked ? (
              <FavoriteOutlinedIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </div>
          <span>{isLiked ? "Liked" : "Like"}</span>
        </div>
        {/* comment button */}
        <div className="h-full w-1/3 flex items-center justify-center gap-2 border-r-2 border-white hover:text-red-800">
          <ChatBubbleOutlineOutlinedIcon />
          <span>Comment</span>
        </div>
        <div className="h-full w-1/3 flex items-center justify-center gap-2 hover:text-red-800 ">
          <MoreHorizRoundedIcon />
          <span>Read More</span>
        </div>
      </div>
    </div>
  );
};

export default StatusUpdate;
