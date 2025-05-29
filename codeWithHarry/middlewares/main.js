const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

//Middleware 1 login  
app.use((req, res, next)=>{
    // console.log(req.headers)
    req.woafi = "Hi! I am Woafi";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method} \n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Middlware 1")
    next();
})
//Middleware 2
// app.use('/user/:id', (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
//   })

app.get('/user/:id', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send(req.woafi)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//http://localhost:3000