// node js architecture


// client -> request -> event queue(FIFO) -> event loop ->


// blocking request

// console.log(1)
// const result = fs.readFileSync("./test.txt", "utf-8")
// console.log(result)
// console.log(2)

// output for sync / blocking -> 1 , result , 2


// non - blocking request


// console.log(1)
// const result = fs.readFileSync("./test.txt", "utf-8",(error,result)=>{
// console.log(result)})
// console.log(2)

// output for async / non - blocking -> 1 , 2 , result


// for async
// client -> request -> event quesue -> event loop -> thread pool

// for sync
// client -> request -> event quesue -> event loop (& it stuck)


