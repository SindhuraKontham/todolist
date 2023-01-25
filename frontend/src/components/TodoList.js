import Todo from "./Todo";
import {useState, useEffect} from 'react';


export default function TodoList() {
const [list,setList] = useState([]);
const [text, setText] = useState('');

const textHandler = (e) =>{
 setText(e.target.value)
}
  return (
    <div className="d-flex flex-column">
      <h1>Todo List</h1>
      <form>
       <input type='text' placeholder="new Task" onChange={textHandler} />
       <button>ADD</button>
       <label>Status:</label>
       <input type='checkbox' />
       <label>Deadline:</label>
       <input type='date' />
       <label>Priority</label>
       <input type='number' min='0' max='2' />
       {/* <label>Created at: {}</label> */}
      </form>
      
      <Todo list={list}/>
    </div>
  )
}
