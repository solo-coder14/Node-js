const express = require('express')
const handle = require('./handler/handlerReq');

const app = express();

const port = 3000


// app.locals.title = 'My App';

// app.get('/index', (req, res) => {
//     console.log(app.locals.title);
//     res.send('Hello World!')
// })

//In another file
// app.get('/', handle);

//Sub app
// const admin = express();
// app.use('/admin', admin);
// admin.get('/user', (req, res) => {
//     console.log(admin.mountpath);
//     res.send('Sub app!');
// })


//for universal method, it will be accessible with all method
// app.all('/method', (req, res) => {
//     console.log(req.method);
//     res.send(`'universal method!' using now ${req.method}`);
// })



//middleware using param
// app.param('id', (req, res, next, id) => {
//     const paramsObj = { ...req.params };
//     req.userObj = paramsObj; //Add paramsObj into req object
//     console.log(req.url, "\n",paramsObj);
//     next();
// });

// app.get('/:id', (req, res) => {
//     console.log(req.userObj);
//     res.send('Middleware using Param!');
// })


app.route('/about/mission')
    .get((req, res) => {
    res.send('It is a get request')
})
    .post((req, res) => {
    res.send('It is a post request')
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})