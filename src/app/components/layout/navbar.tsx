"use client";
import Link from "next/link";
import MobileMenu from "../mobile-menu";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* left */}
      <div className="hidden md:block w-[20%]">
        <Link href="/" className="text-xl text-slate-600 font-mono">
          paging
        </Link>
      </div>

      {/* middle */}
      <div className="flex w-[50%] text-sm">
        <input
          className="h-10 w-full border-2 border-slate-600 bg-slate-100 rounded-md"
          placeholder="Search!"
        ></input>
      </div>

      {/* right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <div className="block md:hidden">
          <MobileMenu />
        </div>
        <div className="hidden md:block text-slate-600">
          <Link href="/settings">
            <SettingsOutlinedIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
