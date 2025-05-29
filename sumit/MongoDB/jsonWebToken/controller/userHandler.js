const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config');

const router = express.Router();

const userSchema = require('../models/userSchema');
const User = new mongoose.model("User", userSchema);


router.post('/signup', async (req, res) => {
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(409).json({
                error: "User already exists with this email"
            });
        }

        // Hash password
        const hashPassword = await bcrypt.hash(req.body.password, 5);

        // Create new user
        const newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: hashPassword,
        });

        await newUser.save();

        res.status(201).json({ // 201 Created is more appropriate for successful creation
            message: "User created successfully!",
            user: {
                email: newUser.email,
                username: newUser.username,
                status: newUser.status
                // Never return the password/hash in response
            }
        });
    } catch (err) {
        // Handle mongoose validation errors separately
        if (err.name === 'ValidationError') {
            return res.status(400).json({
                error: Object.values(err.errors).map(val => val.message)
            });
        }

        res.status(500).json({
            error: "There was a server side error!",
        });
    }
});

router.post('/login', async (req, res) => {
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            const isVaildPassword = await bcrypt.compare(req.body.password, existingUser.password);
            if (isVaildPassword){
                //generate token
                const token = jwt.sign({
                    username: existingUser.username,
                    userID: existingUser._id,
                }, secretKey, {
                    expiresIn: '1h'
                });

                res.status(200).json({
                    "access_token": token,
                    "message" : "Login successful!"
                });
            } else {
                res.status(401).json({
                    error: "Authentication faild!"
                })
            }
        } else {
            return res.status(401).json({
                error: "User not found with this email!"
            });
        }
    } catch (err) {

    }
});


module.exports = router;
