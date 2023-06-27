import React, { useState } from "react";
import "./AddToDo.css";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

export const AddToDo = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    dispatch(
      addTask({
        name: name,
        description: description,
      })
    );
    setName("");
    setDescription("");
  };

  return (
    <div className="d-flex p-4 justify-content-between align-items-center add_task">
      <div className="d-flex align-items-center">
        <div className="d-flex flex-column me-5">
          <label
            htmlFor=""
            className="text-white fw-bold d-flex flex-column fs-4"
          >
            Name
          </label>
          <input
            value={name}
            onChange={handleName}
            type="text"
            className="rounded"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="text-white fw-bold d-flex flex-column fs-4"
          >
            Description
          </label>
          <input
            value={description}
            onChange={handleDescription}
            type="text"
            className="rounded description"
          />
        </div>
        {(!name.trim() && showAlert) && (
          <div className="alert alert-danger ms-5" role="alert">
            Name field cannot be empty.
          </div>
        )}
        
      </div>
      <div className="d-flex">
      
        <button
          onClick={handleAddTask}
          className="add_btn rounded text-white fw-bold p-2"
        >
          ADD TODO
        </button>
      </div>
    </div>
  );
};
