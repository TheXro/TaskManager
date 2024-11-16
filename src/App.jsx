import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";

function App() {

  return (
    <>
      <TaskProvider>
        <div className="px-2 py-2  md:px-32 md:py-8">
          <h1 className="text-4xl font-bold ">Task Manager</h1>
          <div className=" ">
            <div className="bg-[#eee0] my-8 p-6 rounded-2xl border-2 shadow-[3px_3px_#000000] ">
              <Header name={"User"} />
              <SearchBar />
              <TaskList />
            </div>
          </div>
        </div>
      </TaskProvider>
    </>
  );
}

export default App;
