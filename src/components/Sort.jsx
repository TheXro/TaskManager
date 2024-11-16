import { useState } from "react";
import React from "react";
import { HiOutlineFunnel } from "react-icons/hi2";

function Sort() {
  const sort = ["All", "High", "Low", "Med"];
  const [selected, setSelected] = useState(sort[0]);
  const handleSelect = (item) => {
    setSelected(item);
  };
  return (
      <div className="flex gap-4 justify-evenly  items-center border-2 p-2 rounded-2xl bg-white shadow-[3px_3px_#000000]">
          <HiOutlineFunnel className="text-2xl opacity-50" />
      {sort.map((item, index) => (
        <button
          key={index}
          onClick={() => handleSelect(item)}
          className={`px-2 py-1 rounded-lg hover:bg-black hover:text-white ${
            selected === item ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Sort;
