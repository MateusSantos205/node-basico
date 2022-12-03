// importacao express
const express = require('express')

const con = require('./conexao')

// inicializa o express
const app = express()

// porta servidor
const porta = 3900

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
    
    try {
        let sql = "SELECT nome,email,ativo,data_cadastro FROM tb_login"
        con.query(sql,(error,result)=>{
            if(error){
                res.send(`Não foi possivel listar os registros ${error}`)
            } 
            res.send(result)
        })
    } catch (error) {
        res.send(`Não foi possivel listar os registros ${error}`)
    }

})

// cria a rota para cadastrar login
app.post('/cadastrar/login',(req,res)=>{
    // res.send(req.body)
    // desestruturacao de dados

    // desestruturacao basica campo a campo
    // let nome = req.body.nome
   

    // desestruturacao de varios campos

    let {nome,email,senha,confirmar} = req.body

    if(senha != confirmar){
        return res.send('<h1>Senhas não conferem!</h1>')
    }


// monta o comando SQL que sera executado no banco de dados
    try{
    
        let sql=`INSERT INTO tb_login(nome,email,senha)VALUES('${nome}','${email}','${senha}')`

        // executa o comando SQl no banco de dados
        // executa um callback quando o comando é executado
        con.query(sql,(error,result)=>{
            if(error){
                return res.send(`Erro ao cadastrar: ${error}`)
            }

            // restorna a mensagem de sucesso
            res.send(`Cadastro realizado com sucesso!`)
        })

        

    }catch (error){
        res.send(`Erro ao cadastrar: ${error}`)
    }

    

    



    // res.json({ retorno: 'ok',mensagem:'Usuário add com sucesso!' })    


})

// rota para atualização de registros
app.patch('/atualizar/login',(req,res)=>{
    // cria a var nome e email e atribui os valores enviados via param
    let {id,nome,email} = req.body

    try {
        let sql = `UPDATE tb_login SET nome='${nome}', email='${email}' WHERE id=${id}`;
        con.query(sql,(error,result)=>{
            if(error){
                return res.send(`Não foi possivel atualizar od dados ${error}`)
            }
            res.send(`Dados atualizados com sucesso`)
        })

    } catch (error) {
        res.send(`Não foi possivel atualizar od dados ${error}`)
    }
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