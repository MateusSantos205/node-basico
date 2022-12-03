// importando o express
const express = require('express');

// inicianlizando o express
const app = express()

// define a porta de funcionamento do servidor
const porta = 3300

// criar rotas
// cria a rota / -> raiz da aplicacao
app.get('/',(req,res)=>{
    res.send('Index - Aplicação Express!')
})

app.get('/login',(req,res)=>{
    res.send('Login - Sistema Express!')
})

app.get('/cadastrar',(req,res)=>{
    res.send('<h1>Cadastar - Usuários Express</h1>')
})

// lista o servidor
app.listen(porta,() =>{
    console.log(`Servidor rodando: http://localhost:${porta}`)
})



