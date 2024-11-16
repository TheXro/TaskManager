import React, { useContext, useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { HiOutlinePlus, HiPlus } from "react-icons/hi2";
import TaskForm from "./TaskForm";
import { TaskContext, TaskProvider } from "../../context/TaskContext";

function TaskList({ filteredTasks, setFilterTasks, search }) {
  const { tasks, setTasks } = useContext(TaskContext);
  const [showForm, setShowForm] = useState(false);
  const handleForm = () => {
    setShowForm(!showForm);
  };

  const deleteTask = (id) => {
    const newtasks = tasks.filter((task) => task.id != id);
    const newfilteredTasks = filteredTasks.filter((task) => task.id != id);
    console.log(newtasks);
    setTasks(newtasks);
    setFilterTasks(newfilteredTasks);
  };

  // console.log(tasks);
  // console.log(filteredTasks);

  //marking tasks done
  const markDone = (id) => {
    const newtasks = tasks.map((task) => {
      if (task.id === id) {
        task.status === "Done"
          ? (task.status = "To Do")
          : (task.status = "Done");
      }
      // console.log(task.status);
      return task;
    });
    setTasks(newtasks);
  };

  //changing priority
  const changePriority = (id) => {
    const newtasks = tasks.map((task) => {
      if (task.id === id) {
        task.priority === "High"
          ? (task.priority = "Low")
          : task.priority === "Low"
          ? (task.priority = "Medium")
          : (task.priority = "High");
      }
      return task;
    });
    setTasks(newtasks);
  };

  return (
    <div className="">
      {/* {search
        ? filteredTasks.map((task, index) => {
          return <TaskItem key={index} task={task} deleteTask={deleteTask} markDone={markDone} changePriority={changePriority} />;
        })
        : tasks.map((task, index) => {
            return <TaskItem key={index} task={task} deleteTask={deleteTask} markDone={markDone} changePriority={changePriority} />;
      })} */}
      {filteredTasks.map((task, index) => {
        return (
          <TaskItem
            key={index}
            task={task}
            deleteTask={deleteTask}
            markDone={markDone}
            changePriority={changePriority}
          />
        );
      })}
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
            <TaskForm setForm={setShowForm} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TaskList;
