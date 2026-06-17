// NOTE - To run - remember it's "npm run start" or 'node server.js" in terminal (the former just invokes the latter in package.json)
require('dotenv').config()

// This is basically a requirements package
const express = require('express') // Express package and all it's dependencies go to node_modules

// express app
const app = express()

// middleware (stuff between request on server and sending response)
app.use((req, res, next) => {
    console.log(req.path, req.method)  // logs the req method
    next() // utilises next function so we move onto the next middleware no matter what
})

// routes handler
app.get('/', (req, res) => {// Sends a get request at root of localhost:4000
    res.json({mssg: 'Welcome to the app'}) // This then sends a response message 
})  

// listen for requests  
app.listen(process.env.PORT, () => {  // PORT can be found in the .env variables
    console.log('Listening on port ', process.env.PORT)
})  // To exit out of listening -> "ctrl + c"
