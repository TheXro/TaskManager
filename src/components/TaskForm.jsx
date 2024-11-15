import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const task = {
    title,
    description,
    status,
    priority,
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  // console.log(task);
  const handleSubmit = (e) => {
    e.preventDefault();
    title || description || status || priority ? console.log("Task Added") : console.log("Please fill all the fields");
  };


  return (
    <div className="bg-transparent flex justify-center items-center ">
      <form
        className="w-[500px] flex gap-4 flex-col border-[#111] bg-white border-2 rounded-xl p-4 shadow-[3px_3px_#000000] "
      >
        <input
          type="text"
          name="title"
          placeholder="Enter Task Title"
          className="outline-none text-3xl font-bold"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Enter Task Description"
          className="outline-none text-lg resize-none"
          rows={1}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* <button>Add Task</button> */}
        <div className="gap-3 flex">
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
              onChange={handleStatusChange}
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
            />
            <label htmlFor="In Progress" className="pl-1">
              In Progress
            </label>
          </div>
        </div>
        <div
          className="bg-white text-black px-4 py-2 rounded-lg w-fit flex items-center gap-2 cursor-pointer border-2 duration-150  active:shadow-none shadow-[3px_3px_#000]"
          onClick={handleSubmit}
        >
          <HiOutlinePlus className="text-xl" /> Add
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
