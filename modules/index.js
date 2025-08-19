// every js file is module
// you know modular programming
// write seprate logics

const { sum, subtract } = require('./math.js')

// require(fs) -> now its find in thier package 
// require(./math) -> now its find into current working directory

// require function is thing of node.js it is not available in javascript

console.log(sum(1, 2))
console.log(subtract(1, 2))