// This section works towards making the code modular 

const xyz = require('./people'); // This RUNS people.js when we run module
const { people } = require('./people'); // DESTRUCTURING (taking just people from the exports of people.js (and not ages))

const os = require('os');  // Operating System

console.log(xyz.people, xyz.ages)
console.log(os.platform(), os.homedir())

// console.log(xyz) // This returns an empty object UNLESS ./people has an module.exports defined