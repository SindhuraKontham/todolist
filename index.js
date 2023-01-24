const express = require('express');
const app = express();

const {todoRouter} = require('./routes/todo')

const PORT = 4000;


app.use('/todos', todoRouter)

app.listen(PORT, ()=>{
    console.log(`Running on port: ${PORT}`);
})