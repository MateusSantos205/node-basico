// importacao do modulo http
const http = require('http')

// cria o servidor
const servidor = http.createServer((req,res)=>{
    // seta o header da resposta
    // retornar HTML
    res.setHeader('Content-type','text/html')
    // html que será retornado para renderizar no navegador
    res.end(`
        <h1>Olá Mundo!</h1>    
    `)
})

// listen do servidor
servidor.listen('3000',()=>{
    console.log(`Servidor rodando: http://localhost:3000`)
})