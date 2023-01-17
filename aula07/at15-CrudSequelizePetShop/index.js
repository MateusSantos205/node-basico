// importa o modulo do express
const express = require('express')

// inicializa o express

const app = express()

const porta = 5000;

// Cria a rota padrao
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/views/login.html')
})

app.get('/cadastrar',(req,res)=>{
    res.sendFile(__dirname+'/views/cadastrar.html')
})

app.listen(porta,()=>{
    console.log(`Servidor rodando em http://localhost:${porta}`)
})