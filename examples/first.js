require('jsy-node')
const first = require('./hello.jsy')
const second = require('./hello')
console.dir({first, second}, {colors: true})
