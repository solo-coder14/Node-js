const express = require('express');
const app = express();
const crypto = require('crypto');

const sendVerificationEmail = require('./lib/sendVerification');

app.get('/send',(req, res)=>{
    const verificationToken = crypto.randomBytes(32).toString('hex');
    sendVerificationEmail("woafisun@yahoo.com", verificationToken);
    res.send("Hello Programmer!")
})

app.get('/verify-email', async (req, res) => {
  const token = req.query.token;
  console.log(token);
  res.send('Email verified successfully!');
});

app.listen(3000,()=>{
    console.log("Port is listening on localhost3000...")
});