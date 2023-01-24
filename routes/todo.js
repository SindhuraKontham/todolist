const express = require('express');

const todoRouter = express.Router();

const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoController')

todoRouter.get('/', getTodos);

todoRouter.post('/', createTodo);

todoRouter.put('/', updateTodo);

todoRouter.delete('/', deleteTodo);

module.exports = {
    todoRouter
}
