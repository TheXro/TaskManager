import { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskContext } from "./context/TaskContext";

function App() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [filterTasks, setFilterTasks] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
    const filteredTasks = tasks.filter((task) => {
      return (
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilterTasks(filteredTasks);
  };
  // console.log(filterTasks);
  return (
    <>
      <div className="px-2 py-2  md:px-32 md:py-8">
        <h1 className="text-4xl font-bold ">Task Manager</h1>
        <div className=" ">
          <div className="bg-[#eee0] my-8 p-6 rounded-2xl border-2 shadow-[3px_3px_#000000] ">
            <Header name={"User"} />
            <SearchBar handleSearch={handleSearch} />
            <TaskList
              filteredTasks={filterTasks}
              setFilterTasks={setFilterTasks}
              search={search}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
