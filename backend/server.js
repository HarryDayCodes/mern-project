// This is basically a requirements package
const express = require('express') // Express package and all it's dependencies go to node_modules

// express app
const app = express()

// listen for requests
app.listen(4000, () => {
    console.log('Listening on port 4000')
})