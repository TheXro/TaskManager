import React, { useContext } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { TaskContext, TaskProvider } from "../context/TaskContext";
import Sort from "./Sort";

function SearchBar() {

  const { tasks, setTasks } = useContext(TaskContext);
  console.log(tasks)

  return (
    <div className="py-6 md:flex gap-4 justify-between">
      <div className="flex items-center border-2 p-2 rounded-2xl bg-white shadow-[3px_3px_#000000] md:w-[60%]">
        <HiOutlineMagnifyingGlass className="text-2xl opacity-50" />
        <input
          type="text"
          className="w-full bg-transparent outline-none px-2"
          placeholder="Start Searching . . . "
        />
      </div>
      <Sort />
      <div className="border-2 p-2 rounded-2xl bg-white shadow-[3px_3px_#000000] w-fit ">Add Tasks</div>
    </div>
  );
}

export default SearchBar;
