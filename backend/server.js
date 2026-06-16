// This is basically a requirements package
const express = require('express') // Express package and all it's dependencies go to node_modules

// express app
const app = express()

// routes handler
app.get('/', (req, rest) => {// Going to root "/", it'll fire the function..
    res.json({mssg: 'Welcome to the app'})// function: returns a "response object" (res) which is a message
})  

// listen for requests
app.listen(4000, () => {
    console.log('Listening on port 4000')
})  // To exit out of listening -> "ctrl + c"