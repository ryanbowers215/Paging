"use client";
import StatusUpdate from "./status-update";

const WrappedPost = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="h-8 bg-gray-200 flex px-3 items-center text-md text-red-500 p-2 rounded-t-lg">
        <span>Lauren liked Ryan's Update</span>
      </div>
      <StatusUpdate />
    </div>
  );
};

export default WrappedPost;
