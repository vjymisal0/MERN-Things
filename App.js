const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express()

const User = require("./model/userSchema")

dotenv.config({ path: './config.env' })

app.use(require('./routes/auth'))

require("./db/conn")

app.use(express.json())

const PORT = process.env.PORT


//middleware
const middleware = (req, res, next) => {
    console.log("Hello my middleware")
    next()
}


// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

app.get("/about", middleware, (req, res) => {
    res.send("Hello World About")
})

app.get("/contact", (req, res) => {
    res.send("Contact form")
})

app.get("/signin", (req, res) => {
    res.send("Login form")
})

app.get("/signup", (req, res) => {
    res.send("Signup form")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}: click here-> http://localhost:3000`)
})

