import axios from "axios";
import React from "react";

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
  return (
    <div>
      <button className="btn btn-danger" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
}
