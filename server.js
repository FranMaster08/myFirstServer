const express = require('express');
const server = express();
const path = require('path');

server.get('/',(req,res)=>{
    res.send('Hola Mundo')
})
server.get('/fran',(req,res)=>{
    res.send('Hola Mundo Otra Vez')
})
server.get('/fran/itati/brasil',(req,res)=>{
    res.send('Estamos de subcampeones !!')
})

server.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/home.html'))
})



server.listen(3001,()=>{
    console.log(`Server is runnig in the Port : 3001`);
})