const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://codecinnpro:9qLtJIAG9k8G1Pe8@cluster0.egrjwh1.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("Connection OPEN!!!");
    })
    .catch(err=>{
        console.log("Oh No Error!!!");
        console.log(err);
    });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/haha', (req, res) => {
  res.send('Hahaha!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//admin create new host account
// authenticatedhost to see all created visitor
// authenticated user to issue visitor pass
// visitor to retrieve the pass 
// show user data once successful login 