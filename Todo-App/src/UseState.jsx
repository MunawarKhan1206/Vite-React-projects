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
    <div className="p-6 max-w-lg mx-auto bg-slate-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Manage Your Tasks
      </h1>
      <hr className="border-t-4 border-black my-4" />
      <div className="mb-4 flex items-center gap-2">
        <input
          className="border border-gray-300 p-2 rounded-md flex-1"
          value={todo}
          placeholder="What's next on your list?"
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button
          text={"Add"}
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        />
      </div>
      <hr className="border-t-4 border-black my-4" />
      {/* To-Do List */}
      <div className="space-y-2">
        {todos.map((data, ind) => (
          <div
            key={ind}
            className="flex items-center justify-between bg-gray-200 border border-gray-300 rounded-md p-3 shadow-sm hover:bg-gray-300 transition duration-150 ease-in-out"
          >
            <h1 className="text-gray-800 flex-1">{data}</h1>
            <button
              onClick={() => deleteTodo(ind)}
              className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-150 ease-in-out"
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
