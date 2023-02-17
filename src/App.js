import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { FaPlus } from "react-icons/fa";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  function handleAddTask(task) {
    setTasks((prevTasks) => [...prevTasks, task]);
    setFormVisible(false);
  }

  return (
    <div className="App">
      <header>
        <h1>Be Your Better Version</h1>
      </header>
      <div className="add-task">
        {formVisible ? (
          <AddTaskForm onAddTask={handleAddTask} />
        ) : (
          <button
            className="add-task-button"
            onClick={() => setFormVisible(true)}
          >
            <FaPlus />
          </button>
        )}
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
