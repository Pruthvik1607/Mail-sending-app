const express = require('express')
const app = express();
const port = process.env.PORT || 3000
const sendMail = require("./controllers/sendMail")

app.get("/",(req,res)=>{
    res.send("im a server ")
})
app.get("/sendmail", sendMail)

const start = async()=>{
    try{
        app.listen(port,()=>{
            console.log(`mail app is listening http://localhost:${port}`)
        })
    }catch(err){}
};

start();