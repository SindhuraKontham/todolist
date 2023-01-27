import axios from "axios";
import React from "react";

export default function CheckBox({
  id,
  statusF,
  setStatus,
  value,
  deadline,
  priority,
  setTasksArray,
}) {
  const putTask = {
    valuee: value,
    statuss: statusF,
    deadlinee: deadline,
    priorityy: priority,
  };

  console.log(putTask);
  const onCheck = () => {
    setStatus(!statusF);
    axios.put(`http://localhost:4000/todos/${id}`, putTask).then((res) => {
      console.log(res);
      setTasksArray((tasks) => {
        return tasks.map((task) => {
          if (task.id === id) {
            console.log(res.data);
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
      <input onChange={onCheck} type="checkbox" />
    </div>
  );
}
