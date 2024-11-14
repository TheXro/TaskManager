import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { HiOutlinePlus, HiPlus } from "react-icons/hi2";

const tasks2 = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    status: "In Progress",
    priority: "High",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    status: "Completed",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    status: "Todo",
    priority: "Low",
  },
];

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasks2);
  }, []);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: "New Task",
      description: "New Description",
      status: "In Progress",
      priority: "Low",
    };
    tasks.push(newTask);
    setTasks([...tasks]);
    // console.log(tasks);
  };

  const deleteTask = (id) => {
    tasks.splice(
      tasks.findIndex((task) => task.id === id),
      1
    );
    setTasks([...tasks]);
  };

  console.log(tasks);
  return (
    <div className="">
      {tasks.map((task, index) => {
        return <TaskItem key={index} task={task} deleteTask={deleteTask} />;
      })}
      <div 
        className="bg-black text-white px-4 py-2 rounded-lg w-fit flex items-center gap-2 cursor-pointer"
        onClick={addTask}
      >
        <HiOutlinePlus className="text-xl"/>   Add Task
      </div>
    </div>
  );
}

export default TaskList;
