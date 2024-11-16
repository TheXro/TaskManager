import { useContext, useState } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import SearchBar from "./components/ui/SearchBar";
import TaskList from "./components/Task/TaskList";
import { TaskContext } from "./context/TaskContext";

function App() {
  const { tasks } = useContext(TaskContext); // Access tasks from context
  const [filter, setFilter] = useState("All"); // Current filter option
  const [search, setSearch] = useState(""); // Search input value

  // Filter and search tasks dynamically
  const filteredTasks = tasks.filter((task) => {
    // Apply filter
    if (filter !== "All" && task.priority !== filter) return false;

    // Apply search
    if (
      search &&
      !(
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
      )
    ) {
      return false;
    }

    return true;
  });

  const handleFilter = (item) => {
    setFilter(item); // Update filter value
  };

  const handleSearch = (e) => {
    setSearch(e.target.value); // Update search value
  };

  return (
    <div className="px-2 py-2 md:px-32 md:py-8">
      <h1 className="text-4xl font-bold">Task Manager</h1>
      <div className="bg-[#eee0] my-8 p-6 rounded-2xl border-2 shadow-[3px_3px_#000000]">
        <Header name={"User"} />
        <SearchBar handleSearch={handleSearch} handleFilter={handleFilter} />
        <TaskList filteredTasks={filteredTasks} />
      </div>
    </div>
  );
}

export default App;
