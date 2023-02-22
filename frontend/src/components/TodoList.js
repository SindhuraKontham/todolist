import IconButton from "@mui/material/IconButton";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { useState } from "react";
import Edit from "./Edit"
// import

export default function TodoList({ id,tasks, setTasksArray }) {
//   const [inputState, setInputState] = useState("");
// //   const [status, setStatus] = useState(false);
// //   const [deadline, setDeadline] = useState("");
// //   const [priority, setPriority] = useState();
//   const [isActiveEdit, setIsActiveEdit] = useState(false);
//   const [editButton, setEditText] = useState("EDIT");

// //   const editTodo = (e) => {
// //     e.preventDefault()
// //     console.log(e.target.value);
// //     setInputState(e.target.value);
// //   };
//   // console.log(inputState);

//   const putTask = {
//     valuee: inputState,
//     statuss: false,
//     deadlinee: "2023-01-02",
//     priorityy: 0,
//     created_att: "2023-01-02",
//   };

  // console.log(putTask);

//   const editTodo = () => {
//     setIsActiveEdit((current) => !current);
//     if (editButton === "EDIT") {
//       setEditText("SAVE");
//     } else {
//       setEditText("EDIT");
//       // axios
//       // .put(`http://localhost:4000/todos/:${id}`,putTask)
//     }
//   };
  // const onEdit = () => {

  // };

  return (
    <div>
       <IconButton aria-label="edit" size="large">
        <EditSharpIcon onClick={<Edit />} fontSize="inherit" color="primary" />
      </IconButton>
    </div>
  );
}
