const mongoose = require('mongoose');
const express = require('express');
const router = require('./controller/todoHandler');
const userHandler = require('./controller/userHandler');

const app = express();
app.use(express.json());

//Database Connection with Mongoose
mongoose.connect('mongodb://localhost:27017/todos')
.then(()=> console.log('connection successful'))
.catch(err => console.log(err));

app.use('/todo', router);
app.use('/user', userHandler);

function errorHandler(err, req, res, next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({error: err});
}

app.use(errorHandler);

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});