const mongoose = require ('mongoose')

const PatientSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const PatientModel = mongoose.model('pregnant',PatientSchema)
module.exports= PatientModel;

//  pregnant is the table name