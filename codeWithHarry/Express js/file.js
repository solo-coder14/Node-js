const express = require('express');
const app = express();
const port = 3000;

// app.use(express.static('public')) //for geting file from public folder

// Routes
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/about', (req, res) => {
// console.log('Request received for:', req.url); // Check the URL
//     res.send('Hello programmers!');
// });

app.get('/blog/:slug/:second', (req, res) => {
    console.log('Params:', req.params); // Log params
    console.log('Query:', req.query);  // Log query
    res.send(`Hello ${req.params.slug}! and ${req.params.second}`);
});

// ?mode=dark&region=ban for query
app.listen(port, () => {
    console.log(`http://localhost:3000/blog/variable-name/2nd-variable-name?mode=dark&regin=ban`);
    console.log(`http://localhost:3000/blog/variable-name/2nd-variable-name`);
    console.log(`http://localhost:3000/blog/variable-name`);
});

//http://localhost:3000/blog/variable-name/2nd-variable-name?mode=dark&regin=ban