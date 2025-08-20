// ^5.1.0 -> version must be like 0.0.0 in three parts
// 5 -> 1st part -> major release / major update -> be carefull here -> code can be break
// 1 -> 2nd part -> recomanded bug fix / security fix / might be a small feature  update
// 0 -> 3rd part -> minior fixes -> optional update

// go to github -> repo of that package and cheek history / change log


// be carefull for major update

// at time of install you specified your version -> npm i express@4.1.0 use @

// ^ -> this symbol means -> when we use npm i then it can update minor & recomanded updates but not major be careful 5.1.0 < 6.0.0

// if you use like express:5.0.1 -> now its lock it never change

// when you use ~ then it only changes minor update 

// you can also use latest -> express:latest