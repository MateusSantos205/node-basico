// importação do modulo mysql2
// npm i mysql2 --save
const mysql2 = require('mysql2')


// imporntante que no futuro não fique esses dados em formato de texto

// pesquisar e usar arquivos em .env
module.exports = mysql2.createConnection({
    host: "localhost",
    user: "root",
    senha: "",
    database: "db_sistema_node"
})