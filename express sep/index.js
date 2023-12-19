const express = require('express');

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
    console.log(req.query)
    if (req.query.password === '1234') {
        next();
    }
    else {
        res.status(401).send("You are not authenticated")
    }
}//route level middleware

//API -ENDPOINTS

server.get('/', auth, (req, res) => {
    res.json({ type: 'GET' })
}
)

server.listen(3000, () => {
    console.log("listening to port 3000 -> http://localhost:3000");
}
)
