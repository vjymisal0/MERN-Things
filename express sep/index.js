const express = require('express');

const server = express();
server.get('/', (req, res) => {
    res.send("Hello world from the server");
})


// server.get('/about', (req, res) => {
//     res.send("About Page")
// })

//middleware:->




//API -ENDPOINTS

server.patch('/', (req, res) => {
    res.json({ type: 'PATCH' })
}
)

server.listen(3000, () => {
    console.log("listening to port 3000 -> http://localhost:3000");
}
)
