const express = require('express')

const app = express();

const port = 3000

app.get('/about/us', (req, res) => {
    console.log(req.originalUrl);
    console.log(req.path);
    console.log(req.query);
    console.log(req.accepts('html'));
    console.log(req.get('content-type'));
    res.send('Hello World!')
})

app.get('/users/:userId/:slug', (req, res) => {
    console.log(req.params);
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})