import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./main.css";

function Add({ inputState, setInputState, setTasksArray }) {
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");

  // const [priority, setAge] = React.useState('');

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  const onChangeFun = (e) => {
    setInputState(e.target.value);
  };

  const handleDeadline = (e) => {
      setDeadline(e.target.value);
    
  }

  const postTask = {
    valuee: inputState,
    deadlinee: deadline,
    priorityy: priority,
  };
  console.log(postTask);

  function onClickFun(event) {
    event.preventDefault();
    axios.post("http://localhost:4000/todos", postTask).then((res) => {
      setTasksArray((tasks) => {
        return [...tasks, res.data];
      });
      setInputState("");
      setDeadline("");
      setPriority("");
    });
   
  }

  return (
    <div>
      <div className="Heading">
        <h1>TO DO LIST</h1>
      </div>
      <div className="container">
        <TextField
          required
          onChange={onChangeFun}
          id="outlined-required"
          label="New Task"
          defaultValue="Hello World"
          sx={{ width: 400 }}
          value={inputState}
        />
        <TextField
        required
          id="date"
          // label="Deadline"
          type="date"
          onChange={handleDeadline}
          // defaultValue={deadline}
          sx={{ width: 150 }}
          // InputLabelProps={{
          //   shrink: true,
          // }}
        />
        <FormControl sx={{ minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Priority
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={priority}
            onChange={handleChange}
            autoWidth
            label="Priority"
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          onClick={onClickFun}
          type="button"
          id="addInputButton"
          size="large"
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default Add;
