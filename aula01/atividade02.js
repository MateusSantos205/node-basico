// importação do modulo readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Qual o seu nome?\n \r",(nome)=>{
    console.log(`Olá, ${nome}`)

    rl.question("Qual a sua idade?\n \r",(idade)=>{
        if(idade >= 18){
            console.log('Pode tirar carta!')
        }else{
            console.log('Não pode tirar carta!')
        }

        rl.close()
    })

    
})



