import React from "react";
// import { useState } from 'react';
import axios from "axios";
import TodoList from "./TodoList";
// import axios from 'axios';
import { useEffect, useState } from "react";

function Add() {
  const [tasks, setTasksArray] = useState([]);
  const [inputState, setInputState] = useState("");
  const [status, setStatus] = useState(false);
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState();
  // const [inputState, setInputState] = useState('')

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get("http://localhost:4000/todos");
        setTasksArray(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, [inputState, status, deadline,priority,tasks]);

  const onChangeFun = (e) => {
    setInputState(e.target.value);
  };

  const postTask = {
    valuee: inputState,
    statuss: status,
    deadlinee: deadline,
    priorityy: priority,
    created_att: "2023-01-02",
  };
  console.log(postTask);

  function onClickFun(event) {
    event.preventDefault();
    axios.post("http://localhost:4000/todos", postTask).then((res) => {
        // setStatus(false);
        setInputState('');
        // setDeadline("");
        // setPriority();
    });
  }

  return (
    <div className="container">
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
            <label>Status:</label>
            <input
              onChange={(e) => {
                setStatus(!status);
              }}
              type="checkbox"
            />
            <label>Deadline:</label>
            <input
              onChange={(e) => {
                setDeadline(e.target.value);
              }}
              type="date"
            />
            <label>Priority:</label>
            <input
              onChange={(e) => {
                setPriority(e.target.value);
              }}
              type="number"
              min="0"
              max="2"
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
      <div>
        <TodoList tasks={tasks} setTasksArray={setTasksArray} />
      </div>
    </div>
  );
}

export default Add;
