import { useState } from "react";

function Tdolist() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleTodoAdd() {
    if (newTask.trim() === "") return; // Prevent adding empty tasks
    setTodo([...todo, { id: Math.random(), isComplete: false, title: newTask }]);
    setNewTask("");
  }

  function handleTodoRemove(id) {
    const newList = todo.filter((item) => item.id !== id);
    setTodo(newList);
  }

  function handleToggleComplete(id) {
    const updatedTodos = todo.map((item) =>
      item.id === id ? { ...item, isComplete: !item.isComplete } : item
    );
    setTodo(updatedTodos);
  }

  return (
    <div className="todoDiv">
      <h3>Your To-Do List</h3>
      <input
        type="text"
        value={newTask}
        className="todoInput"
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="What do you want to do?"
      />
      <button onClick={handleTodoAdd} className="todoBtn">
        Add to List
      </button>

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => handleToggleComplete(item.id)}
            />
            <span style={{ textDecoration: item.isComplete ? "line-through" : "none" }}>
              {item.title}
            </span>
            <button onClick={() => handleTodoRemove(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tdolist;