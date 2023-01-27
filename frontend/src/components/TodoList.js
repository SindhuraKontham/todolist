// import axios from "axios";
// import { useState } from "react";
// // import

// export default function TodoList({ tasks, setTasksArray }) {
//   const [inputState, setInputState] = useState("");
//   const [status, setStatus] = useState(false);
//   const [deadline, setDeadline] = useState("");
//   const [priority, setPriority] = useState();
//   const [isActiveEdit, setIsActiveEdit] = useState(false);
//   const [editButton, setEditText] = useState("EDIT");

//   const onChangeHandler = (e) => {
//     e.preventDefault()
//     console.log(e.target.value);
//     setInputState(e.target.value);
//   };
//   // console.log(inputState);

//   const putTask = {
//     valuee: inputState,
//     statuss: false,
//     deadlinee: "2023-01-02",
//     priorityy: 0,
//     created_att: "2023-01-02",
//   };

//   // console.log(putTask);

//   const editHandler = () => {
//     setIsActiveEdit((current) => !current);
//     if (editButton === "EDIT") {
//       setEditText("SAVE");
//     } else {
//       setEditText("EDIT");
//       // axios
//       // .put(`http://localhost:4000/todos/:${id}`,putTask)
//     }
//   };
//   // const onEdit = () => {

//   // };

//   return (
//     <div>
//       {tasks.map((task) => {
//         return (
//           <div key={task.id}>
//             <div>
//               <div 
//               contentEditable={isActiveEdit ? true : false}
//               >
//               <input
//                 // onChange={onChangeHandler}
//                 name="name"
//                 type="text"
//                 value={task.value}
//                 required
//               />
//                 <span> {task.status} </span>
//                 <span> {task.deadline} </span>
//                 <span> {task.priority} </span>
//                 <span> {task.created_at} </span>
//               </div>
//               <button 
//               onClick={editHandler}
//               >
//                 {editButton}
//               </button>
//               <button> DONE </button>
//               <button> DELETE </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
