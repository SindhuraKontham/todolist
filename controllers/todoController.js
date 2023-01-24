const { db } = require('../db');

console.log(db);
const getTodos = async (req,res)=>{
    try {
    
    const todos = await db.query(`SELECT * FROM todos;`)
    res.json(todos.rows)
    } catch (error) {
        res.status(500).send('server error')
    }
};

const createTodo = (req,res)=>{
    res.send('here are the todos')
};

const updateTodo =  (req,res)=>{
    res.send('updating a todo')
};

const deleteTodo = (req,res)=>{
    res.send('deleting a todo')
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}
