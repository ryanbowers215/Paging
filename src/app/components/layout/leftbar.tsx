"use client";
import Link from "next/link";
import MobileMenu from "../mobile-menu";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const Leftbar = () => {
  return (
    <div className="w-48 h-[calc(100vh-96px)] pt-10">
      {/* links */}
      <div className="flex flex-col gap-20 items-center justify-center font-mono">
        <Link
          href="/profile/username"
          className="flex gap-2 items-center hover:text-slate-400"
        >
          {" "}
          <Person2OutlinedIcon />
          Profile
        </Link>
        <Link
          href="/books/123"
          className="flex gap-2 items-center hover:text-slate-400"
        >
          <LibraryBooksOutlinedIcon />
          Books
        </Link>
        <Link
          href="/shelves"
          className="flex gap-2 items-center hover:text-slate-400"
        >
          <AutoAwesomeMotionOutlinedIcon />
          Shelves
        </Link>
        <Link
          href="/friends"
          className="flex gap-2 items-center hover:text-slate-400"
        >
          <PeopleAltOutlinedIcon />
          Friends
        </Link>
      </div>
    </div>
  );
};

export default Leftbar;
