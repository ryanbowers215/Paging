import Image from "next/image";
import StatusUpdate from "./components/posts/status-update";
import CompletedPost from "./components/posts/completed-book-post";
import FriendedPost from "./components/posts/friended-post";

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-col items-center gap-[20px] py-5">
        <FriendedPost />
        <CompletedPost />
        <StatusUpdate />
      </div>
    </main>
  );
}
