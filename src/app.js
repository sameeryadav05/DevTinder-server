const express = require('express')

const app = express()


app.use("/test",(req,res)=>{
    res.send("test !");
})

app.use("/profile",(rea,res)=>{
    res.send("profile")
})
 

app.listen("3000",()=>{
    console.log("This run when server is succesfully running !");
})