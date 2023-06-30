import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTodoComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  };

  const handleTodoDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      <form onSubmit={handleNewTodoSubmit} className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={handleNewTodoChange}
          placeholder="Enter a new task"
          className="flex-grow mr-2 px-2 py-1 border border-gray-300 rounded focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Add Task
        </button>
      </form>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search tasks"
        className="mb-4 px-2 py-1 border border-gray-300 rounded w-full focus:outline-none"
      />

      <ul className="space-y-2">
        {filteredTodos.map((todo, index) => (
          <li
            key={index}
            className={`flex items-center space-x-2 py-1 px-2 border border-gray-300 rounded ${
              todo.completed ? 'bg-gray-200' : ''
            }`}
          >
            <span
              className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}
            >
              {todo.text}
            </span>
            {!todo.completed && (
              <button
                onClick={() => handleTodoComplete(index)}
                className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
              >
                Complete
              </button>
            )}
            <button
              onClick={() => handleTodoDelete(index)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
