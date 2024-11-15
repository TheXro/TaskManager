import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/taskContext";

function App() {
  return (
    <>
      <TaskProvider>
        <div className="px-40 py-8 h-full w-full  ">
          <h1 className="text-4xl font-bold ">Task Manager</h1>
          <div className="bg-[#eee0] my-8 p-6 rounded-2xl border-2 shadow-[3px_3px_#000000] ">
            <Header name={"User"} />
            <SearchBar />
            <TaskList />
          </div>
        </div>
      </TaskProvider>
    </>
  );
}

export default App;
