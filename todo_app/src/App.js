import { useSelector } from "react-redux";
import "./App.css";
import { AddToDo } from "./components/AddToDo";
import { TaskCard } from "./components/TaskCard";

function App() {
  const todos = useSelector((state) => state.tasks.tasks);

  return (
    <div className="container-fluid home">
      <h1 className="text-white text-center pt-5">TO-DO APP</h1>
      <div className="container app">
        <AddToDo />
        {todos.map((todo) => (
          <TaskCard
            id={todo.id}
            name={todo.name}
            description={todo.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
