// mongodb connection
const mongoose = require('mongoose');
const config = require('config');
const dbURI = config.get('mongoURI');

const connectDB = async () => {
    try{
        await mongoose.connect(dbURI);  //newUrlParser:true?? need?
        console.log("Connected to MongoDB!");
    } catch(err) {
        console.log("Error while connecting to MongoDB!");
        console.error(err.message);
        process.exit(1); // exit process with failure
    }
}

module.exports = connectDB;