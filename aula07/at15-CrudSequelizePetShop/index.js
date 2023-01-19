// importa o modulo do express
const express = require('express')

// inicializa o express
const app = express()

// importa o modulo do usuario
const usuario = new require("./model/usuario")

// importa o modulo do produto
const produto = new require("./model/produto")

const porta = 5000;

// Define a pasta publica que armazena o conteudo estatico(css,js,img)
app.use(express.static('views/public'))

// ----------------------MIDLEWARE-------------------------
// Decodifica os parametros enviados para a rota
app.use(express.urlencoded({extended:true}))

// converte os valores para formato JSON
app.use(express.json())

// Cria a rota padrao
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/views/login.html')
})

// rota para cadastro de usuario
app.get('/cadastrar',(req,res)=>{
    res.sendFile(__dirname+'/views/cadastrar-usuarios.html')
})

app.post('/cadastrar/usuarios',(req,res)=>{
    let dados = req.body
    usuario.create(dados)
    .then(respBd=>{
        res.json({
            retorno:"ok",
            mensagem:"Cadastro realizado com sucesso!"
        })
    })
    .catch(respBd=>{
        res.json({
            retorno:"error",
            mensagem:`Erro ao cadastrar! ${respBd}`         
        })
    })
})

// função que lista todos os usuarios 
app.get("/listar/usuarios",(req,res)=>{
    // 
    usuario.findAll()
    .then(respBd=>{
        // retorna os dados
        res.json(respBd)
    })
    .catch(respBD=>{
        res.json({
            retorno:"erro",
            mensagem:`Erro ao listar ${respBD}`
        })
    })
    
})

app.delete('/excluir/usuarios/:id',(req,res)=>{

    let id = req.params.id

    usuario.destroy({where:{id:id}})
    .then(respBD=>{
        res.json({
            retorno:"ok",
            mensagem:"Usuário removido com sucesso"
        })
    })
    .catch(respBD=>{
        res.json({
            retorno:"erro",
            mensagem:`Erro ao deletar ${respBD}`
        })
    })

})

// ---------------------------------------------------------------
// função que lista os usuarios por id
app.get("/listar/usuarios/:id",(req,res)=>{
    let id = req.params.id

    usuario.findOne({where:{id:id}})
    .then(respBd=>{
        // retorna os dados
        res.json(respBd)
    })
    .catch(respBD=>{
        res.json({
            retorno:"erro",
            mensagem:`Erro ao listar ${respBD}`
        })
    })
    
})

app.listen(porta,()=>{
    console.log(`Servidor rodando em http://localhost:${porta}`)
})      