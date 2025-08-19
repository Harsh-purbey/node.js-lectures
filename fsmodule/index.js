const { error } = require('console');
const fs = require('fs');

//blocking code -> sync
// fs.writeFileSync('./test.txt', 'i am testing');

//non blocking code -> async
// fs.writeFile('./textAsync.text', "i am async text", (error) => {
//     if (error) {
//         console.log('something went wrong')
//     }
//     else {
//         console.log('file created successfully')
//     }
// })

// use utf-8 to conver buffer data into string
// const result = fs.readFileSync('./contact.txt', 'utf-8');
// console.log(result)

// also direct use toString() method
// const result = fs.readFileSync('./contact.txt');
// console.log(result.toString())

// it prints buffer data directly
// const result = fs.readFileSync('./contact.txt');
// console.log(result)

// fs.readFile('./contact.txt', (error, data) => {
//     if (error) {
//         console.log('somthing went wrong');
//     }
//     else {
//         console.log(data.toString())
//     }
// })

// fs.appendFileSync('./contact.txt', '\ncontact Ram -> 0123456789')

// fs.readFile('./contact.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log('somthing went wrong');
//     }
//     else {
//         console.log(data)
//     }
// })


// for copy file
// fs.cpSync('./contact.txt', "./contactCopy.txt")

// for remove/delete file 
// fs.unlinkSync('./contactCopy.txt')


// you can know the stats using this
// const stats = fs.statSync('./contact.txt');
// console.log(stats)

// check is file 
const isFile = fs.statSync('./contact.txt').isFile();
console.log('IS FILE ->', isFile)

// create folder
// fs.mkdirSync('./my-docs')
// file within folder
fs.mkdirSync('./my-docs1/app/index.js', { recursive: true })




