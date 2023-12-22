const fs = require('fs')
const index = fs.readFileSync('index.html', 'utf-8')
const express = require('express');
const data = fs.readFileSync('Vijay.json', 'utf-8')
const morgan = require('morgan');
const server = express();
// server.use(morgan('default'))//its deprecated
server.use(morgan('dev'))
server.use(express.static('public'))
const products = data.products
server.use(express.json())
// server.get('/', (req, res) => {
//     res.send(index);
// })



// server.get('/', (req, res) => {
//     res.send("Hello world from the server");
// })

// server.get('/about', (req, res) => {
//     res.send("About Page")
// })

//middleware:->

// server.use((req, res, next) => {
//     console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'))
//     next();
// }) //server level middleware


const auth = (req, res, next) => {
    // console.log(req.query)
    // if (req.query.password === '1234') {
    //     next();
    // }
    // else {
    //     res.status(401).send("You are not authenticated")
    // }
    next();
}
//route level middleware

//API -ENDPOINTS

// server.get('/product/:id', auth, (req, res) => {
//     console.log(req.params)
//     res.json({ type: 'GET' })
// }
// )
// Read GET /products
server.get('/products', (req, res) => {
    res.json({ type: 'GET' })
})
// Read GET /products/:id
server.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === id)
    res.json(product)   // it will send the product in json format
})
//create POST /products
server.post('/products', (req, res) => {
    console.log(req.body)
    products.push(req.body)
    res.status(201).json();
})
//update PUT /products/:id
server.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    products.splice(productIndex, 1, { ...req.body, id: id })
    res.status(201).json();
})



// server.post('/register', auth, (req, res) => {
//     res.json({ type: 'POST' })
// }
// )

// server.put('/login', auth, (req, res) => {
//     res.json({ type: 'PUT' })
// }
// )

// server.delete('/', (req, res) => {
//     res.json({ type: 'DELETE' })
// }
// )


server.listen(3000, () => {
    console.log("listening to port 3000 -> http://localhost:3000");
}
)







































































































// const express = require("express")
// const dotenv = require("dotenv")
// const mongoose = require("mongoose")
// const app = express()

// const User = require("./model/userSchema")

// dotenv.config({ path: './config.env' })

// app.use(require('./routes/auth'))

// require("./db/conn")

// app.use(express.json())

// const PORT = process.env.PORT

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}: click here-> http://localhost:3000`)
// })

