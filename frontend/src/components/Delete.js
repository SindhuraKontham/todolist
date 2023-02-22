import axios from "axios";
import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditSharpIcon from "@mui/icons-material/EditSharp";

export default function Delete({ id, tasks, setTasksArray }) {
  const deleteTodo = () => {
    axios.delete(`http://localhost:4000/todos/${id}`).then((res) => {
      setTasksArray((tasks) => {
        return tasks.filter((task) => {
          console.log(res.data, task.id);
          return task.id !== id;
        });
      });
    });
  };
  const editTodo = () => {
    axios.put(`http://localhost:4000/todos/${id}`).then((res) => {
      setTasksArray((tasks) => {
        return tasks.filter((task) => {
          console.log(res.data, task.id);
          return task.id !== id;
        });
      });
    });
  };
  return (
    <div>
      {/* <button className="btn btn-danger" onClick={deleteTodo}> */}
      <IconButton aria-label="delete" size="large">
        <DeleteIcon onClick={deleteTodo} fontSize="inherit" color="primary" />
      </IconButton>
      {/* Delete
      </button> */}
    </div>
  );
}
