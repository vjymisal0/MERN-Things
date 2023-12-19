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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}: click here-> http://localhost:3000`)
})

