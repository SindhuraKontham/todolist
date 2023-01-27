const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { todoRouter } = require("./routes/todo");
app.use("/todos", todoRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
