import React from "react";
import { useEffect, useState } from "react";
import Delete from "./Delete";
import CheckBox from "./CheckBox";

export default function Todo({
  statusF,
  setStatus,
  tasks,
  setTasksArray,
}) {
  

  return (
    <div>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th></th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Priority</th>
            <th>Created_Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.value}</td>
              <td>
                <CheckBox
                  id={task.id}
                  statusF={statusF}
                  setStatus={setStatus}
                  value={task.value}
                  deadline={task.deadline}
                  priority={task.priority}
                  setTasksArray={setTasksArray}
                />
                </td>
                {task.status ? "pending" : "finished"}
                <td>
              </td>
              <td>{task.deadline.split("T")[0]}</td>
              <td>{task.priority}</td>
              <td>{task.created_at.split("T")[0]}</td>
              <td>
                <Delete
                  id={task.id}
                  tasks={tasks}
                  setTasksArray={setTasksArray}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
