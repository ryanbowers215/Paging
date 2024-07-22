"use client";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { useState } from "react";

const FriendedPost = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="w-full bg-red-500 text-white h-fit md:h-70  flex flex-col items-center justify-between">
      {/* top */}
      <div className=" w-full h-12 text-lg flex items-center px-3">
        <span>Ryan is now friends with Lauren!</span>
      </div>

      {/* bottom */}
      <div className="bg-gray-200 text-red-500 w-full h-8 flex flex-row items-center justify-between text-center text-sm cursor-pointer font-mono">
        {/* like button */}
        <div
          className=" h-full w-1/2 border-r-2 border-white flex items-center justify-center gap-2 hover:text-red-800"
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          <span>{isLiked ? "Liked" : "Like"}</span>
        </div>
        {/* comment button */}
        <div className="h-full w-1/2 flex items-center justify-center gap-2 hover:text-red-800">
          <ChatBubbleOutlineOutlinedIcon />
          <span>Comment</span>
        </div>
      </div>
    </div>
  );
};

export default FriendedPost;
