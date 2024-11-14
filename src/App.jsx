import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="px-40 py-16">
        <h1 className="text-4xl font-bold">Task Manager</h1>
        <div className="bg-[#eee] my-8 p-6 rounded-2xl  ">
          <Header name={'User'} />
        </div>
      </div>
    </>
  );
}

export default App;
