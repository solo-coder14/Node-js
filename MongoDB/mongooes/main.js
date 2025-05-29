// https://www.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express"
await mongoose.connect("mongodb://localhost:27017/todos")
import { Todo } from "./models/Todo.js";

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({ title: "Monkey type", desc: "discrption of todo", isDone: false })
    todo.save()
    res.send('Hello World!')
})
app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({title: todo.title, desc: todo.desc})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})