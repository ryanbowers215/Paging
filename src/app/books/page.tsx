"use client";
import Image from "next/image";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Link from "next/link";
const BooksPage = () => {
  return (
    <div className="flex flex-col p-4 gap-4">
      {/* Currently Reading */}
      <div className="flex flex-col gap-4">
        <div className="text-2xl w-full font-mono p-2 bg-red-500 rounded-lg text-white">
          <span>You are currently reading</span>
        </div>
        <div className="flex flex-row gap-4 overflow-x-scroll overflow-y-hidden">
          <div className="min-h-50 min-w-32 text-sm flex flex-col gap-1">
            <Link href="/books/123">
              <Image
                src="/playerpiano.jpg"
                width={128}
                height={192}
                alt="Book"
              />
            </Link>
            <div className="flex items-center justify-between gap-1 text-xs text-slate-400 cursor-pointer">
              <div>Update Progress:</div>
              <div>95%</div>
            </div>
          </div>

          <div className="min-h-48 min-w-32 border-2 bg-red-50 border-red-500 flex justify-center items-center cursor-pointer">
            <div className="flex flex-col items-center justify-around text-lg text-red-500">
              <p>Add</p>
              <AddRoundedIcon />
            </div>
          </div>
        </div>
      </div>
      {/* Want to Read */}
      <div className="flex flex-col gap-4">
        <div className="text-2xl w-full font-mono p-2 bg-red-500 rounded-lg text-white">
          <span>Want to read</span>
        </div>
        <div className="flex flex-row gap-4 overflow-x-scroll overflow-y-hidden">
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image
                src="/playerpiano.jpg"
                width={128}
                height={192}
                alt="Book"
              />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/slaught.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/cats.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image
                src="/sirenstitan.jpg"
                width={128}
                height={192}
                alt="Book"
              />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/bluebeard.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/bfc.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>

          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/slap.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-2 bg-red-50 border-red-500 flex justify-center items-center cursor-pointer">
            <div className="flex flex-col items-center justify-around text-lg text-red-500">
              <p>See More</p>
              <AddRoundedIcon />
            </div>
          </div>
        </div>
      </div>
      {/* Friends are reading */}
      <div className="flex flex-col  gap-4">
        <div className="text-2xl w-full font-mono p-2 bg-red-500 rounded-lg text-white">
          <span>Your friends are reading</span>
        </div>
        <div className="flex flex-row gap-4 overflow-x-scroll overflow-y-hidden">
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image
                src="/playerpiano.jpg"
                width={128}
                height={192}
                alt="Book"
              />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/slaught.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/cats.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image
                src="/sirenstitan.jpg"
                width={128}
                height={192}
                alt="Book"
              />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/bluebeard.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/bfc.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/slap.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-2 bg-red-50 border-red-500 flex justify-center items-center cursor-pointer">
            <div className="flex flex-col items-center justify-around text-lg text-red-500">
              <p>See More</p>
              <AddRoundedIcon />
            </div>
          </div>
        </div>
      </div>
      {/* Completed */}
      <div className="flex flex-col  gap-4">
        <div className="text-2xl w-full font-mono p-2 bg-red-500 rounded-lg text-white">
          <span>Recently Completed</span>
        </div>
        <div className="flex flex-row gap-4 overflow-x-scroll overflow-y-hidden">
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image
                src="/playerpiano.jpg"
                width={128}
                height={192}
                alt="Book"
              />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/slaught.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/cats.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image
                src="/sirenstitan.jpg"
                width={128}
                height={192}
                alt="Book"
              />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/bluebeard.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/bfc.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-[1px] border-gray-500">
            <Link href="/books/123">
              <Image src="/slap.jpg" width={128} height={192} alt="Book" />
            </Link>
          </div>
          <div className="min-h-48 min-w-32 border-2 bg-red-50 border-red-500 flex justify-center items-center cursor-pointer">
            <div className="flex flex-col items-center justify-around text-lg text-red-500">
              <p>See More</p>
              <AddRoundedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
