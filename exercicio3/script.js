//Crie a const para a frase aqui
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

console.log (frase)

const umaCor = frase.replace("verde","rosa")

const duasCores =umaCor.replace("azul","laranja")

console.log (duasCores)
console.log ("Verde = "+duasCores.includes("verde") , 
"\nLaranja = "+duasCores.includes("laranja"))

const fraseComMaiusculas = duasCores.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR")

console.log (fraseComMaiusculas)