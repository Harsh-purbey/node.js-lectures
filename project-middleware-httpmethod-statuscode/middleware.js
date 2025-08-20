// client req -> middleware -> controller   -in the case of middleware


// middleware have power to send req next or return

// request , response -> return req , next -> send req next

// we have multiple middleware also

// middleware have access of request & response -> it procees here we put some logic here

// Application level middleware / global level
// app.use((request,response,next)=>{})

//  modify request object
//  app.use((request,response,next)=>{
//  request.userName = "Harsh Kumar"})

