const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const PatientModel = require('./models/Patient')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/Patient') //127.0.0.1

app.post('/login',(req, res)=>{
    const{email,password} = req.body;
    PatientModel.findOne({email: email})
    .then(user =>{
        if(user){
        if(user.password === password){
            res.json('success')
        }else{
            res.json('password is incoreect')
        }
    }else{
        res.json("No record existed")
    }
    })
})

app.post('/register',(req,res)=>{
    PatientModel.create(req.body)
    .then(Patient =>res.json(Patient))
    .catch(err=>res.json(err))
})

 
 app.listen(3008,()=>{
    console.log('server is running')
 })