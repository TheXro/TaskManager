import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";
function TaskItem({ task, deleteTask, markDone, changePriority }) {
  // console.log(task)
  return (
    <>
      <div
        className={`flex justify-between rounded-2xl p-4 my-4 border-2 shadow-[3px_3px_#000000] z-0 ${
          task.status === "Done"
            ? "opacity-50 bg-[#111111ab] shadow-none"
            : "opacity-100"
        }  `}
      >
        <div
          className="flex flex-col text-xl w-1/2   justify-center text-wrap cursor-pointer" 
        onClick={() => markDone(task.id)}

        >
          {task.title}
          <p className="text-[#aaa] text-wrap text-sm">{task.description}</p>
          
        </div>
        <div className="flex text-sm justify-evenly items-center gap-3">
          <div
            onClick={() => markDone(task.id)}

            className={` rounded-full p-1 px-3 text-white font-medium cursor-pointer ${
              task.status === "To Do"
                ? "bg-[#222]"
                : task.status === "In Progress"
                ? "bg-[#222]"
                : "bg-green-800"
            }
          }
            
            `}
          >
            {task.status}
          </div>
          <div
            onClick={() => changePriority(task.id)}
            className={`rounded-full p-1 px-3 font-medium cursor-pointer ${
              task.priority === "High"
                ? "bg-red-500 text-white"
                : task.priority === "Low"
                ? "bg-green-400"
                : "bg-yellow-400"
            }`}
          >
            {task.priority}
          </div>
          <div className="relative">
            <div className=" z-10 cursor-pointer" onClick={() => deleteTask(task.id)}>
              <HiOutlineTrash className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskItem;
