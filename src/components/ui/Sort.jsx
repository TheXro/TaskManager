import { useContext, useState } from "react";
import React from "react";
import { HiOutlineFunnel } from "react-icons/hi2";
import { TaskContext } from "../../context/TaskContext";

function Sort({handleFilter}) {
  // const { tasks, setTasks } = useContext(TaskContext);
  //sorting
  // const handleSorting = () => {
  //   const priorityOrder = { high: 3, mid: 2, low: 1 };
  //   tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  // };
  // console.log(tasks)

  const sort = ["All", "High", "Low", "Medium"];
  const [selected, setSelected] = useState(sort[0]);
  const handleSelect = (item) => {
    // console.log(item)
    handleFilter(item)
    setSelected(item);
  };
  return (
    <div className="flex  md:gap-4 justify-between  items-center border-2 p-2 rounded-2xl bg-white shadow-[3px_3px_#000000]">
      <HiOutlineFunnel className="text-2xl opacity-50" />
      {sort.map((item, index) => (
        <button
          key={index}
          onClick={() => handleSelect(item)}
          className={`md:px-2 px-2 p-1 md:py-1 rounded-lg hover:bg-black  hover:text-white ${
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
