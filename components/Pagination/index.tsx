"use client";

import { IPagination } from "@/interfaces/componentsInterfaces";
import ButtonComp from "../Button";

export default function Pagination({
  currentPage,
  perPage,
  totalCount,
  setCurrentPage,
}: IPagination) {
  const pages = Math.ceil(totalCount / perPage);
  return (
    <div className="flex items-center gap-5">
      <ButtonComp
        disabled={currentPage === 1}
        className="px-3 py-1 text-xs"
        dark
        title="Prev"
        onClick={() => setCurrentPage((prev) => prev - 1)}
      />
      <div className="flex gap-1 items-center">
        {Array.from({ length: pages }).map((_, index: number) => (
          <p
            style={{
              backgroundColor: currentPage === index + 1 ? "black" : "white",
              color: currentPage === index + 1 ? "white" : "black",
            }}
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className="p-1 border hover:shadow border-bcolor flex justify-center items-center w-7 h-7 rounded-md text-center cursor-pointer">
            {index + 1}
          </p>
        ))}
      </div>
      <ButtonComp
        disabled={currentPage === pages}
        className="px-3 py-1 text-xs"
        dark
        title="Next"
        onClick={() => setCurrentPage((prev) => prev + 1)}
      />
    </div>
  );
}
