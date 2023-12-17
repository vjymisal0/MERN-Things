const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express()


dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE


mongoose.connect(DB).then(() => {
    console.log("Connection successful")
}).catch((err) => console.log("No connection"))

const middleware = (req, res, next) => {
    console.log("Hello my middleware")
    next()
}
// middleware()

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

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
