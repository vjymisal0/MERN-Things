const mongoose = require("mongoose")

const DB = process.env.DATABASE;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

mongoose.connect(DB).then(() => {
    console.log("Connection successful")
}).catch((err) => console.log("No connection"))