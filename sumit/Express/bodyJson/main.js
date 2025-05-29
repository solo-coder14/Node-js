const express = require('express');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    delete req.body.url;
    res.json(req.body)
});

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});