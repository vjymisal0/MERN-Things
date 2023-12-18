const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express()


dotenv.config({ path: './config.env' })

require("./db/conn")
const User = require("./model/userSchema")

const PORT = process.env.PORT

//middleware
const middleware = (req, res, next) => {
    console.log("Hello my middleware")
    next()
}


app.get('/', (req, res) => {
    res.send("Hello World")
})

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
    console.log("Server is running on port 3000: click here-> http://localhost:3000")
})
