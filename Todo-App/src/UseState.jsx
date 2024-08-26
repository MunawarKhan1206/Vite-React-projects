import { useState } from "react";
import Button from "./components/Button";

function UseState() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, ind) => ind !== index));
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      {/* Input and Add Button */}
      <div className="mb-4">
        <input
          className="border border-gray-300 p-2 rounded-md w-full sm:w-80"
          value={todo}
          placeholder="Add a new todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button
          text={"Add"}
          onClick={addTodo}
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white"
        />
      </div>
      
      {/* To-Do List */}
      <div>
        {todos.map((data, ind) => (
          <div
            key={ind}
            className="flex items-center justify-between bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-md hover:bg-gray-50 transition duration-150 ease-in-out"
          >
            <h1 className="text-lg font-semibold text-gray-800">{data}</h1>
            <button
              onClick={() => deleteTodo(ind)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-150 ease-in-out"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseState;
