import axios from "axios";
import React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CheckBox({
  id,
  status,
  value,
  date,
  priority,
  setTasksArray,
}) {
  
  // const [statusF, setStatus] = useState(!status);
  // console.log(statusF)
  
  // setStatus(!statusF);
  // // setStatus(false);
  console.log("Hello checkbox")
  const putTask = {
    valuee: value,
    statuss: !status,
    deadlinee: date,
    priorityy: priority,
  };

  console.log(putTask);
  const onCheck = () => {
   
    console.log(putTask);
    axios.put(`http://localhost:4000/todos/${id}`, putTask)
    .then((res) => {
        console.log(putTask);
      setTasksArray((tasks) => {
        return tasks.map((task) => {
          if (task.id === id) {
            return res.data;
          } else {
            return task;
          }
        });
      });
    });
  };

  return (
    <div>
      {/* <input onChange={onCheck} type="checkbox" /> */}
      {/* <Switch {...label} onChange={onCheck}  color="success" /> */}
      {/* <Switch {...label} /> */}

      <IconButton aria-label="check-box" size="large">
        <CheckBoxIcon onClick={onCheck} fontSize="inherit" color="primary" />
      </IconButton>
    </div>
  );
}
