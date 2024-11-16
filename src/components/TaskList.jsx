import React, { useContext, useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { HiOutlinePlus, HiPlus } from "react-icons/hi2";
import TaskForm from "./TaskForm";
import { TaskContext, TaskProvider } from "../context/TaskContext";

function TaskList() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [showForm, setShowForm] = useState(false);
  const handleForm = () => {
    setShowForm(!showForm);
  };

  const deleteTask = (id) => {
    const newtasks = tasks.filter((task) => task.id != id);
    console.log(newtasks);
    setTasks(newtasks);
  };

  // console.log(tasks);
  return (
    <div className="">
      {tasks
        ? tasks.map((task, index) => {
            return <TaskItem key={index} task={task} deleteTask={deleteTask} />;
          })
        : null}
      <div
        className="bg-white text-black px-4 py-2 rounded-2xl w-fit flex items-center gap-2 cursor-pointer border-2 duration-150  active:shadow-none shadow-[3px_3px_#000] "
        onClick={handleForm}
      >
        <HiOutlinePlus className="text-xl" /> Add Task
      </div>
      {showForm ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center ">
          <div
            className="w-full h-full z-2 bg-[#11111197]"
            onClick={handleForm}
          ></div>
          <div className="absolute top-[30vh]  ">
            <TaskForm />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TaskList;
