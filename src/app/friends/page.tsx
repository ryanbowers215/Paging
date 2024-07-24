"use client";
import Friend from "../components/friend/friend";

const FriendsPage = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 items-center justify-start my-4 py-4">
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </div>
  );
};

export default FriendsPage;
