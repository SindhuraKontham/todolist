import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/Todo";
import Add from "./components/Add";
import { useState, useEffect } from "react";

function App() {
  
  const [inputState, setInputState] = useState("");
  const [tasks, setTasksArray] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos");
      const jsonData = await response.json();
      setTasksArray(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="Container">
      <Add
        inputState={inputState}
        setInputState={setInputState}
        setTasksArray={setTasksArray}
      />
      <Todo
        tasks={tasks}
        setTasksArray={setTasksArray}
      />
    </div>
  );
}

export default App;
