// importação do modulo express
const express = require("express")

// inicia o express
const app = express()

const porta = 4200

app.get('/',(req,res)=>{
    res.json({"rota":"index"})
})

// rota de cadastro de usuarios
app.get('/cadastrar/login',(req,res)=>{
    res.json({"rota":"cadastrar login"})
})

app.listen(porta,()=>{
    console.log('Servidor rodando: http://localhost:${porta}')
})


