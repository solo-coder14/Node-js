const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON data

// Handle POST request to '/register'
app.post('/register', (req, res) => {
    const { username, email } = req.body;
    
    if (!username || !email) {
        return res.status(400).json({ message: 'Username and Email are required' });
    }

    res.status(201).json({ message: `User ${username} registered successfully!` });
});

// Start Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

