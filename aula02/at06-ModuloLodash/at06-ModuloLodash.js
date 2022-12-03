// exemplo de uso do modulo(biblioteca) Lodash
// inicializar projeto npm
// npm init
// ou
// npm i -g npm

// instalacao do lodash: npm install --save lodash

// importação do lodash
const _ = require("lodash");
// import _ from 'lodash';

// cria um array de numeros
const numeros = [10, 7, 14, 47, 32, 3];
const numeros2 = [100, 28, 37];

console.log(numeros);

// soma os numeros
console.log("Soma dos números:", _.sumBy(numeros));

// exibe o primeiro numero do array
console.log("Primeiro número:", _.first(numeros));
// exibe o ultimo numero
console.log("Último número:", _.last(numeros));
// exibe o menor numero
console.log("Menor número:", _.min(numeros));
// exibe o maior numero
console.log("Maior número:", _.max(numeros));
// media dos numeros
console.log("Média dos números:", _.mean(numeros));
// união de dois arrays
console.log("União de arrays", _.union(numeros, numeros2));

// funcao que gera numeros aleatorios
const numerosMegaSena = () => {
  return Math.trunc(Math.random() * 60);
};

// executa a funcao numerosMegaSena 6 vezes
const jogoCompleto = _.times(6, numerosMegaSena);

// exibe o jogo da mega sena
console.log(jogoCompleto);
