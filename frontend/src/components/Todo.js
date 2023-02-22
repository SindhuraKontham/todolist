import React from "react";
import Delete from "./Delete";
import "./main.css";
import CheckBox from "./CheckBox";
import Edit from "./Edit";
export default function Todo({  tasks, setTasksArray }) {
  return (
    <div >
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            {/* <th></th> */}
            <th>Status</th>
            <th>Priority</th>
            <th>Deadline</th>
            <th>Created_Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody >
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.value}</td>
              {/* <td>
                <CheckBox
                  id={task.id}
                  value={task.value}
                  deadline={task.deadline}
                  priority={task.priority}
                  setTasksArray={setTasksArray}
                />
              </td> */}
              <td>{task.status ?   "finished" : "pending"}</td>
              <td>{task.priority}</td>
              <td>{task.deadline.split("T")[0]}</td>
              <td>{task.created_at.split("T")[0]}</td>
              <td className="buttons">
                <Delete
                  id={task.id}
                  tasks={tasks}
                  setTasksArray={setTasksArray}
                />
                <Edit
                  id={task.id}
                  task={task.value}
                  date={task.deadline.split("T")[0]}
                  priority={task.priority}
                  setTasksArray={setTasksArray}
                />
                 <CheckBox
                  id={task.id}
                  status={task.status}
                  value={task.value}
                  date={task.deadline.split("T")[0]}
                  priority={task.priority}
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
