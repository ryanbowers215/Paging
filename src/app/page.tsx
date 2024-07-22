"use client";
import Image from "next/image";
import StatusUpdate from "./components/posts/status-update";
import CompletedPost from "./components/posts/completed-book-post";
import FriendedPost from "./components/posts/friended-post";
import StartedPost from "./components/posts/started-post";
import FriendsReading from "./components/carousels/friends-reading";
import WrappedPost from "./components/posts/wrapped-post";

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-col items-center gap-[30px] py-5">
        <WrappedPost />
        <CompletedPost />
        <FriendedPost />
        <StatusUpdate />
        <StartedPost />
      </div>
    </main>
  );
}
