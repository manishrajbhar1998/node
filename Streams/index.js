// const express = require("express");
// const status = require('express-status-monitor');
const fs = require("fs");
const path = require("path");
// const zlip = require("zlib");

// const app = express();




// app.use(status());

// fs.createReadStream("./demo.txt").pipe(zlip.createGzip().pipe(fs.createWriteStream("./sample.zip")))

// app.get("/",(req,res)=>{

//     // fs.readFile("./demo.txt","utf-8",(err,data)=>{
//     //     res.send(data);
//     // })

//     const stream = fs.createReadStream("./demo.txt","utf-8");
//     stream.on("data",(chunk)=>res.write(chunk));
//     stream.on("end",()=>res.end());
// })

// app.listen(8000,()=>{
//     console.log("Server is Running on 8000 Ports");
// })


const filePath = path.join(__dirname,"demo.txt")
console.log("filePath :: ",filePath);
const readableStream = fs.createReadStream(filePath);
const writeableStream = fs.createWriteStream("copyOfDemo.txt");

readableStream.pipe(writeableStream)

// readableStream.on("data",(chunk)=>{
//     writeableStream.write(chunk);
//     // console.log(`Recived ${chunk.length} bytes of data`);
//     // console.log(chunk);
// })



// readableStream.on("end",()=>{
//     console.log("finished readin the file");
// })