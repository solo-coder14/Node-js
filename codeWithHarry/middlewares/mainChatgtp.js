const express = require('express');
const app = express();

// Application-level middleware (runs for every request)
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next(); // Pass control to the next middleware
});

// Built-in middleware (to parse JSON body)
app.use(express.json());

// Route-specific middleware
const checkAuth = (req, res, next) => {
    const auth = '';
    if (auth === 'secret-token') {
        next(); // Proceed to the next middleware or route handler
    } else {
        res.status(403).json({ message: 'Unauthorized' });
    }
};

// Using middleware for a specific route
app.get('/secure', checkAuth, (req, res) => {
    res.json({ message: 'You have access!' });
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});