const express = require('express')
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/company');
const employee = require("./models/employee")

const port = 3000

app.set('view engine', 'ejs');

function getRandom(arr) {
    let random = Math.floor(Math.random() * arr.length )
    return arr[random]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})
app.get('/generate', async (req, res) => {
    //clear the collection
    await employee.deleteMany({})
    //Generate random data
    let randomNames = ["Bishop", "Chichi", "Galaxy"]
    let randomLang = ["c++", "Python", "Ruby"]
    let randomCities = ["New Work", "Tokyo", "Kyoto"]
    for (let index = 0; index < 5; index++) {
        let e = await employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 22000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random() > 0.5) ? true : false
        })
        console.log(e)
    }
    
    res.json({ status: 'success', message: '10 employees created' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})