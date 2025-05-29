const express = require('express')

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    // res.end();
    // res.status(201);
    // res.status(201);
    res.sendStatus('Hello World!')
    console.log(res.headersSent);
})


app.get('/user', (req, res) => {
    res.format({
        'text/plain': () => {
            res.send('hi');
        },
        'text/html': () => {
            res.render('pages/about', {
                name: 'Bangladesh'
            });
        },
        'application/json': () => {
            res.json({
                message: 'About'
            });
        },
        default: () => {
            res.status(406).send("Not acceptable");
        }
    });
})

// app.get('/about', (req, res) => {
//     res.cookie('name', 'woafi');
//     res.end();
// })


app.get('/about', (req, res) => {
    res.redirect('/woafi');
    res.end();
})


app.get('/woafi', (req, res) => {
    res.send("Developed by Woafi!")
})

app.get('/header', (req, res) => {
    res.set('Platform', 'Developed by Woafi');
    console.log(res.get('Platform'));
    res.end();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})