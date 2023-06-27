import React, { useState } from "react";
import "./TaskCard.css";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";

export const TaskCard = ({ id, name, description }) => {
  const [complete, setComplete] = useState(true);
  const dispatch = useDispatch();

  const complete_btn = () => {
    setComplete(!complete);
  };

  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };
  return (
    <div className="container d-flex justify-content-between mt-4 show_task p-5 align-items-center">
      <div>
        {complete === true ? (
          <>
            <h1 className="task_title">{name}</h1>
            <p className="text-white">{description}</p>
          </>
        ) : (
          <>
            <h1 className="task_title">
              <del>{name}</del>
            </h1>
            <p className="text-white">
              <del>{description}</del>
            </p>
          </>
        )}
      </div>

      <div>
        {complete === true ? (
          <button
            onClick={complete_btn}
            className="rounded fw-bold text-success me-5 border border-success p-2 btn_complete"
          >
            Complete
          </button>
        ) : (
          <button
            onClick={complete_btn}
            className="rounded fw-bold text-success me-5 border border-success p-2 btn_complete"
          >
            İncomplete
          </button>
        )}

        <button
          onClick={() => {
            removeTask();
          }}
          className="rounded fw-bold text-danger border border-danger p-2 btn_delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
