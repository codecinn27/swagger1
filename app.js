const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const adminRouter = require('./route/admin');

mongoose.connect('mongodb+srv://codecinnpro:9qLtJIAG9k8G1Pe8@cluster0.egrjwh1.mongodb.net/vms_2?retryWrites=true&w=majority')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open",()=>{
    console.log("Database connected");
})

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/admin',adminRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});


//admin create new host account
// authenticatedhost to see all created visitor
// authenticated user to issue visitor pass
// visitor to retrieve the pass 
// show user data once successful login 