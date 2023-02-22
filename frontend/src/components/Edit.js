import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import FormHelperText from '@mui/material/FormHelperText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from "@mui/material/IconButton";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { useState } from 'react';
import axios from 'axios';

export default function Edit({id,task,date,priority,setTasksArray}) {
  const [open, setOpen] = React.useState(false);
  const [inputState, setInputState] = useState(task);
  const [status, setStatus] = useState(false);
  const [deadline, setDeadline] = useState(date);
  const [priorityN, setPriorityN] = useState(priority);
console.log(typeof(id))

  const handleInput = (e) => {
    setInputState(e.target.value)
  };

  const handlePriority = (e) => {
    setPriorityN(e.target.value)
  };
  const handleDeadline = (e) => {
    setDeadline(e.target.value)
  };
  console.log(inputState)
  const handleClickOpen = () => {
    setOpen(true);
  };


  const putTask = {
    valuee: inputState,
    statuss: status,
    deadlinee: deadline,
    priorityy: priorityN,
  };

  console.log(putTask);
  const url = `http://localhost:4000/todos/${id}`
  console.log(url);

  const editTodo = () => {
    // setIsActiveEdit((current) => !current);
    // if (editButton === "EDIT") {
    //   setEditText("SAVE");
    // } else {
    //   setEditText("EDIT");
      axios
      .put(`http://localhost:4000/todos/${id}`,putTask)
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
    setOpen(false);
    }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <IconButton aria-label="edit" size="large">
        <EditSharpIcon onClick={handleClickOpen} fontSize="inherit" color="primary" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit your Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={task}
            type="text"
            fullWidth
            variant="standard"
            onChange={handleInput}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            // label={date}
            type="date"
            fullWidth
            variant="standard"
            onChange={handleDeadline}
          />
        <TextField
            autoFocus
            margin="dense"
            id="name"
          type="number"
          fullWidth
          label={priority}
          onChange={handlePriority} 
        />
        {/* <label>Priority:</label>
        <input type="number" id="tentacles" name="tentacles"
       min="0" max="2"  onChange={handlePriority} ></input> */}
        <FormHelperText id="component-helper-text">
       Priority must be 0(low priority)/1(Medium priority)/2(High priority)
      </FormHelperText>
        </DialogContent>
        <DialogActions>
          <Button onClick={editTodo}>DONE</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}