import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";
function TaskItem({task , deleteTask}) {
  // console.log(task)
  return (
    <>
      <div className="flex justify-between bg-white rounded-2xl p-4 my-4 border-2 shadow-[3px_3px_#000000]">
        <div className="flex text-xl gap-4 items-center justify-center">
          {task.title}
        </div>
        <div className="flex text-sm justify-evenly items-center gap-3">
          <div
            className={` rounded-full p-1 px-3 ${
              task.status === "To Do"
                ? "bg-blue-500"
                : task.status === "In Progress"
                ? "bg-blue-200"
                : "bg-green-400"
            }
          }
            
            `}
          >
            {task.status}
          </div>
          <div
            className={`rounded-full p-1 px-3  ${
              task.priority === "High"
                ? "bg-red-500"
                : task.priority === "Low"
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}
          >
            {task.priority}
          </div>
          <div>
            <div className="cursor-pointer" onClick={() => deleteTask(task.id)}>
            <HiOutlineTrash className="text-xl"/>
            </div>
          </div>
        </div>
      </div>
      {/* <p>{task.description}</p> */}
    </>
  );
}

export default TaskItem;
