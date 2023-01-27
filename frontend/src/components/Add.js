import React, { useState } from "react";
import axios from "axios";

function Add({ inputState, setInputState, setTasksArray }) {
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");

  const onChangeFun = (e) => {
    setInputState(e.target.value);
  };

  const postTask = {
    valuee: inputState,
    deadlinee: deadline,
    priorityy: priority,
  };
  console.log(postTask);

  function onClickFun(event) {
    event.preventDefault();
    axios.post("http://localhost:4000/todos", postTask).then((res) => {
      setTasksArray((tasks) => {
        return [...tasks, res.data];
      });
    });
    setInputState("");
    setDeadline("");
    setPriority("");
  }

  return (
    <div>
      <div className="row">
        <div className="additem col backgroundcolor-col pb-2">
          <div className="row">
            <h1>To Do List</h1>
          </div>
          <div className="row row-cols-md-auto">
            <div className="col-12 flex-grow-1">
              <input
                onChange={onChangeFun}
                name="name"
                type="text"
                className="form-control"
                id="addItemInput"
                placeholder="New Task"
                value={inputState}
                required
              />
            </div>
            <label>Deadline:</label>
            <input
              onChange={(e) => {
                setDeadline(e.target.value);
              }}
              type="date"
              value={deadline}
            />
            <label>Priority:</label>
            <input
              onChange={(e) => {
                setPriority(e.target.value);
              }}
              type="number"
              min="0"
              max="2"
              value={priority}
            />
            <div className="col-12">
              <button
                onClick={onClickFun}
                type="button"
                id="addInputButton"
                className="addbutton btn buttons float-end"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Add;
