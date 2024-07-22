"use client";
import Link from "next/link";
import MobileMenu from "../mobile-menu";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* left */}
      <div className="hidden md:block w-[20%]">
        <Link
          href="/"
          className="text-xl text-red-950 font-mono hover:text-red-500"
        >
          paging
        </Link>
      </div>

      {/* middle */}
      <div className="flex w-[50%] text-sm flex gap-3 bg-red-50 items-center text-gray-500 border-2 border-red-50 rounded-md px-2">
        <SearchRoundedIcon />
        <input
          id="searchbar"
          className="h-10 w-full p-2 bg-red-50 border-none text-gray-500"
          placeholder="Search!"
        />
        <select
          id="searchtype"
          name="searchtype"
          className="h-full rounded-md border-0 bg-transparent text-gray-500 sm:text-sm"
        >
          <option>Books</option>
          <option>Users</option>
        </select>
      </div>

      {/* right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <div className="block md:hidden">
          <MobileMenu />
        </div>
        <div className="hidden md:block text-red-950 hover:text-red-500">
          <Link href="/settings ">
            <SettingsOutlinedIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
