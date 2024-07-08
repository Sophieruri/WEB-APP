const express=require("express")
const mysql=require("mysql")

const server=express()
const dbConnection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"librarydb"
})

server.get("/",(req,res)=>{
    //req-request object -containing info about an incoming request
    //res-response object that has methods/functions that allow responding back
    console.log(typeof req);
    res.send("hello there")
})
server.get("/authors",(req,res)=>{
    dbConnection.query("SELECT * FROM authors", (selectError,data)=>{
        if(selectError)res.status(500).send("database error")
            res.json(data)
    })
  
})

server.get("/books",(req,res)=>{
    dbConnection.query("SELECT * FROM books", (selectError,data)=>{
        if(selectError)res.status(500).send("database error")
            res.json(data)
    })
  
})
//start/run app
server.listen(5000,(err)=>{
    if(err)console.log("err occured" +err.message);
    console.log("server running on port 5000");
})


//templates
//ejs