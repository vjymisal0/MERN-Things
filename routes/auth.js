const express = require("express")
const router = express.Router()

require("../db/conn")
const User = require("../model/userSchema")



router.get('/', (req, res) => {
    res.send("Hello World from the server router.js")
})

router.post('/register', (req, res) => {
    // console.log(req.body)
    // res.json({ message: req.body })
    const { name, email, phone, work, password, cpassword } = req.body

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the fields" })
    }
})

module.exports = router;


