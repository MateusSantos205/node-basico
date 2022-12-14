// importacao express
const express = require('express')

// inicializa o express
const app = express()

// porta servidor
const porta = 3600

// define a pasta public com o conteudo static (CSS,JS,IMG)
app.use(express.static('views/public'));

// middleware
// rota que toda requisicao passa por ela
// rota padrao

// decodifica os parametros enviados para a rota
app.use(express.urlencoded({extended: true}))

// converte os valores para formato JSON
app.use(express.json())



// criar as rotas
app.get('/',(req,res)=>{
    res.status(200)
    res.send('<h1>Index - Rotas</h1>')
})

// cria a rota cadastrar
app.get('/cadastrar',(req,res)=>{
    res.status(200)
    res.sendFile(__dirname+'/views/cadastrar.html')
})

// cria a rota consultar
app.get('/consultar',(req,res)=>{
    res.status(200)
    res.send('<h1>Consultar</h1>')
})

// cria a rota para cadastrar login
app.post('/cadastrar/login',(req,res)=>{
    // res.send(req.body)
    // desestruturacao de dados

    // desestruturacao basica campo a campo
    // let nome = req.body.nome
   

    // desestruturacao de varios campos

    let {nome,email,senha,confirmar} = req.body

    res.json({ retorno: 'ok',mensagem:'Usuário add com sucesso!' })    


})



// rota para retorno da pagina de erro
// super mega importante -> ficar no final das rotas
app.use((req,res)=>{
    res.status(404)
    res.send('<h1>Página não encontrada!</h1>')
})




// lista o servidor.. final do arquivo
app.listen(porta,()=>{
    console.log(`Servidor rodando: http://localhost:${porta}`)
})