const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const todoSchema = require('../models/todoSchema');
const userSchema = require('../models/userSchema');
const Todo = new mongoose.model("Todo", todoSchema);
const User = new mongoose.model("User", userSchema)

const check = require('../middleware/check');

router.get('/', check, async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.userId }).select({ _id: 0, __v: 0 });
        // const todos = await Todo.find({ user: req.userId }).populate("user", "email username -_id").select({ _id: 0, __v: 0});
        res.status(200).json({
            data: todos,
            message: "Todos retrieved successfully!"
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!"
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id).select('-__v');
        if (!todo) {
            return res.status(404).json({
                error: "Todo not found!"
            });
        }
        res.status(200).json({
            data: todo,
            message: "Todo retrieved successfully!"
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!"
        });
    }
});

router.post('/', check, async (req, res) => {
    try {
        const bodyObject = { ...req.body, user: req.userId };
        const newTodo = new Todo(bodyObject);
        const savedTodo = await newTodo.save();
        await User.updateOne({ _id: req.userId }, { $push: { todos: savedTodo._id } })
        res.status(200).json({
            data: savedTodo,
            message: "Todo was inserted successfully!"
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!"
        });
    }
});

router.post('/all', async (req, res) => {
    try {
        if (!Array.isArray(req.body)) {
            return res.status(400).json({
                error: "Request body should be an array of todos"
            });
        }
        const insertedTodos = await Todo.insertMany(req.body);
        res.status(200).json({
            data: insertedTodos,
            message: "Todos were inserted successfully!"
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!"
        });
    }

});

router.put('/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate({ _id: req.params.id }, { $set: { status: 'active' } }, { new: true, runValidators: true });
        if (!updatedTodo) {
            return res.status(404).json({
                error: "Todo not found!"
            });
        }

        res.status(200).json({
            data: updatedTodo,
            message: "Todo was updated successfully!"
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!"
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({
                error: "Todo not found!"
            });
        }
        res.status(200).json({
            message: "Todo was deleted successfully!"
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!"
        });
    }
});

module.exports = router;