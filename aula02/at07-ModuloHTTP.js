// importacao do modulo HTTP
const http = require('http');

// cria o objeto servidor
// req = request(requisicao)
// res = response(resposta)
http.createServer((req,res) =>{
    res.write('Olá Vitor!')
    res.end()
}).listen(3000)





