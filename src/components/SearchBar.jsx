import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  return (
    <div className="py-6">
      <div className="flex items-center border-2 p-2 rounded-2xl bg-white">
        <HiOutlineMagnifyingGlass className="text-2xl opacity-50" />
        <input
          type="text"
          className="w-full bg-transparent outline-none px-2"
          placeholder="Start Searching . . . "
        />
      </div>
    </div>
  );
}

export default SearchBar;
