"use client";
import Shelf from "../components/shelf/shelf";

const ShelvesPage = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 items-center justify-start my-4 py-4">
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
    </div>
  );
};

export default ShelvesPage;
