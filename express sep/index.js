const express = require('express');
const morgan = require('morgan');
const server = express();

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

server.get('/product/id', auth, (req, res) => {
    console.log(id)
    res.json({ type: 'GET' })
}
)
server.post('/register', auth, (req, res) => {
    res.json({ type: 'POST' })
}
)

server.put('/login', auth, (req, res) => {
    res.json({ type: 'PUT' })
}
)

server.delete('/', (req, res) => {
    res.json({ type: 'DELETE' })
}
)


server.listen(3000, () => {
    console.log("listening to port 3000 -> http://localhost:3000");
}
)
