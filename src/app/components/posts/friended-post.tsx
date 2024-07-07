"use client";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { useState } from "react";

const FriendedPost = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="w-full rounded-md h-fit md:h-70 border-2 border-slate-600 flex flex-col items-center justify-between font-mono">
      {/* top */}
      <div className=" w-full h-fit p-1 border-b-2 border-slate-600">
        <span>Ryan is now friends with Lauren!</span>
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

export default FriendedPost;
