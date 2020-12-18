const express =require('express');
const path = require('path');

const app = express();

// app.get('/', (req,res)=>{
//     res.send("Benvenido al Chat Kubea");
// });
app.use(express.static(__dirname+'/../public'));

const http = require('http').createServer(app);


const socket = require('./socket');
socket(http);

module.exports=http;