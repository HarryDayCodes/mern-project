const people  = ['yoshi', 'ryu', 'chun-li', 'mario']
const ages = [20, 25,30, 35]

// console.log(people);

module.exports = {
    people, ages
}  // When you import into another file (e.g. "const xyz = require('./people')") this is what 'xyz' would become 