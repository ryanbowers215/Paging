"use client";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Image from "next/image";
import { useState } from "react";

const StatusUpdate = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="w-full h-fit md:h-70 border-2 border-slate-600 rounded-md flex flex-col items-center justify-between font-mono">
      {/* top */}
      <div className=" w-full h-fit p-1 border-b-2 border-slate-600">
        <span>Ryan is on page 153 of 341 of Player Piano</span>
      </div>
      {/* middle */}
      <div className="w-full h-fit min-h-36 p-1 flex flex-row items-center my-2">
        <div className="w-[33%] min-h-36 bg-white border-2 md:w-32">
          <span>cover</span>
        </div>
        <div className="w-[66%] h-full md:w-64 min-h-36 bg-white flex flex-col items-start justify-around p-2">
          <div className="">
            <div className="text-base text-black">Player Piano</div>
            <div className="text-sm text-slate-400">Kurt Vonnegut Jr.</div>
          </div>
          <div className="text-slate-600">
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
          </div>
          <div className="text-wrap w-full h-fit">
            <span>Review</span>
          </div>
        </div>
      </div>
      {/* progress bar */}
      <div className="w-full h-[15%] p-1 min-h-8 flex flex-row border-t-2 border-slate-600 items-center justify-between gap-2">
        <div className="text-sm text-slate-400">Progress</div>
        <div className="w-full bg-slate-200 rounded-sm h-2.5">
          <div
            className="bg-slate-600 h-2.5 rounded-sm"
            style={{ width: "45%" }}
          ></div>
        </div>
        <div className="text-sm text-slate-400">45%</div>
      </div>

      {/* bottom */}
      <div className="bg-slate-500 w-full h-8 flex flex-row items-center justify-between text-slate-100 text-center text-sm">
        {/* like button */}
        <div
          className=" h-full w-1/2 border-r-2 border-slate-100 flex items-center justify-center gap-2"
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          <span>{isLiked ? "Liked" : "Like"}</span>
        </div>
        {/* comment button */}
        <div className="h-full w-1/2 flex items-center justify-center gap-2">
          <ChatBubbleOutlineOutlinedIcon />
          <span>Comment</span>
        </div>
      </div>
    </div>
  );
};

export default StatusUpdate;
