import React, { useState } from "react";
import { IoMdCheckbox } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function Todo() {
  const [inputValue, setInputValue] = useState("")
  const [task, setTask] = useState([]);
  const [isEditing, setIsEditing] = useState(null); // Track the task being edited
  const [editValue, setEditValue] = useState(""); // Track the new value for the task

  const inputChange = (value) => {
    setInputValue(value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;

    if (task.includes(inputValue)) return setInputValue("");
    setTask((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  const handleEditClick = (index, currentValue) => {
    setIsEditing(index); // Enable edit mode for this task
    setEditValue(currentValue); // Set the current value of the task to edit
  };

  const handleSaveClick = (index) => {
    const updatedTasks = [...task];
    updatedTasks[index] = editValue; // Update the specific task
    setTask(updatedTasks);
    setIsEditing(null); // Exit edit mode
    setEditValue("");
  };

  const handleDelete = (index) => {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  };

  return (
    <>
      <section className="min-h-screen bg-gray-900 text-white p-5">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold uppercase">To-Do List</h1>
        </header>

        <section className="flex justify-center mb-8">
          <form
            onSubmit={formSubmit}
            className="flex space-x-2 bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(event) => inputChange(event.target.value)}
              className="flex-grow p-2 rounded-l-lg bg-gray-700 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Add a new task"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg uppercase shadow-md focus:ring-2 focus:ring-blue-400"
            >
              Add Task
            </button>
          </form>
        </section>

        <section className="flex justify-center">
          <ul className="w-full max-w-md space-y-4">
            {task.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md"
              >
                {isEditing === index ? (
                  // Show input field if in edit mode
                  <input
                    type="text"
                    value={editValue}
                    onChange={(event) => setEditValue(event.target.value)}
                    className="flex-grow p-2 rounded-lg bg-gray-700 text-gray-200 outline-none"
                  />
                ) : (
                  // Show task text
                  <span className="flex-grow text-gray-200">{item}</span>
                )}
                {isEditing === index ? (
                  <button
                    onClick={() => handleSaveClick(index)}
                    className="p-[7px] bg-green-500 text-white rounded-full hover:bg-green-600 focus:ring-2 focus:ring-green-400 ml-2"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(index, item)}
                    className="p-[7px] bg-yellow-500 text-white rounded-full text-sm hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 "
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(index)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:ring-2 focus:ring-red-400 ml-2"
                >
                  <MdDelete />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}

export default Todo;
