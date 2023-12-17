const express = require("express")
const app = express()
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get("/about", (req, res) => {
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
