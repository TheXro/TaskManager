import React, { useContext, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { TaskContext } from "../context/TaskContext";

function TaskForm({setForm}) {
  const { tasks, setTasks } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const task = {
    id: tasks.length + 1,
    title,
    description,
    status : status || "To Do",
    priority : priority || "Medium",
  };
  // console.log(tasks);

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      alert("Please fill all the fields");
      return;
    }
    setTasks([task, ...tasks]) 
    setForm(false)
  };

  return (
    <div className="bg-transparent flex justify-center items-center ">
      <form onSubmit={handleSubmit} className="w-[500px] flex gap-4 flex-col border-[#111] bg-white border-2 rounded-xl p-4 shadow-[3px_3px_#000000] ">
        <input
          autoFocus={true}
          type="text"
          name="title"
          placeholder="Enter Task Title"
          className="outline-none text-3xl font-bold"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          type="text"
          name="description"
          placeholder="Enter Task Description"
          className="outline-none text-lg resize-none"
          rows={1}
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* <button>Add Task</button> */}
        <div className="gap-3 flex ">
          <h1>Priority</h1>
          <h1>:</h1>
          <div className="">
            <input
              type="radio"
              name="priority"
              value="High"
              id="High"
              onChange={handlePriorityChange}
            />
            <label htmlFor="High" className="pl-1">
              High
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              name="priority"
              value="Medium"
              id="Medium"
              onChange={handlePriorityChange}
            />
            <label htmlFor="Medium" className="pl-1">
              Medium
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              name="priority"
              value="Low"
              id="Low"
              onChange={handlePriorityChange}
            />
            <label htmlFor="Low" className="pl-1">
              Low
            </label>
          </div>
        </div>
        {/* STATUS */}
        <div className="gap-3 flex">
          <h1>Status &nbsp; </h1>
          <h1>:</h1>
          <div>
            <input
              type="radio"
              name="status"
              value="To Do"
              id="To Do"
              onChange={handleStatusChange}
            />
            <label htmlFor="To Do" className="pl-1">
              To Do
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="status"
              value="Done"
              id="Done"
              onChange={handleStatusChange}
            />
            <label htmlFor="Done" className="pl-1">
              Done
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="status"
              value="In Progress"
              id="In Progress"
              onChange={handleStatusChange}
            />
            <label htmlFor="In Progress" className="pl-1">
              In Progress
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded-lg w-fit flex items-center gap-2 cursor-pointer border-2 duration-150  active:shadow-none shadow-[3px_3px_#000]"
          onClick={handleSubmit}
        >
          <HiOutlinePlus className="text-xl" /> Add
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
