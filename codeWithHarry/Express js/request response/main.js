// tutorial https://www.youtube.com/watch?v=SksvlZM-5Sk&t=1371s
const express = require('express')
const path = require('path');
const blog = require('./templates/routes');

const app = express()

app.use(express.static('public')); // app.use('/public', express.static(path.join(__dirname, 'public')));
//app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/files', blog);

// app.get('/', (req, res) => {
//     console.log("it is a get req")
//     res.send('Hello World!2')
// })
// app.post('/woafi', (req, res) => {
//     console.log("it is a post req")
//     res.send('Hello World! post')
// })
// app.put('/', (req, res) => {
//     console.log("it is a put req")
//     res.send('Hello World! put')
// })
app.get('/index', (req, res) => {
    console.log("it is the index html");
    res.sendFile('templates/index.html', {root:__dirname});
})
// app.get('/files', (req, res) => {
//     console.log(req.url);
//     res.sendFile(path.join(__dirname, 'public', 'mypage.html'));
// });

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//http://localhost:3000/