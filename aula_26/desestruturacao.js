/*
desestruturação é o ator de você pegar dados de um conjunto, como um array por exemplo e destribuir o mesmo em variaveis. 
uma sequencia de dados só pode ser desestruturada se tiver a mesma quantidade de variaveis e valores para se associarem, se tiver 4 variaveis e apenas 1 valor, as demais variaveis ficarão como undefined. 
*/

let a, b, c, d

[a,b,c,d] = [10,20,30,40]

console.log(a) //10
console.log(b) //20
console.log(c) //30
console.log(d) //40

//também é possivel utilizar para objetos.

({cor1, cor2, cor3, cor4} = {cor1: "amarelo", cor2: "azul", cor3: "branco", cor4: "verde"})

console.log(cor1) //amarelo
console.log(cor2) //azul
console.log(cor3) //branco
console.log(cor4) //verde

//outra forma de desestruturar dados em js, é associar um array a outro array

let numeros = [1, 2, 3, 4]

let [f1, f2, f3, f4] = numeros

//como inverter os valores de variaveis

let g1 = 10
let g2 = 20

[g1, g2] = [g2, g1]

console.log(g1) //20
console.log(g2) //10

//usando spread em desestruturação

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let [b1, b2, b3, ...b4] = numeros2

console.log(b1) //1
console.log(b2) //2
console.log(b3) //3
console.log(b4) //4, 5, 6, 7, 8, 9

//outra maneira de desestruturar objetos

const obj = {Nome: "italo", idade: 27, cidade: "manaus"}

let {nome, idade, cidade} = obj

console.log(nome) //Italo
console.log(idade) //27
console.log(cidade) //manaus

//desestruturando uma função em variaveis.

const cores = () => {
    return ["verde", "amarelo", "azul", "branco"]
}

//para pularmos o azul e irmos para o branco usamos duas virgulas em seguida
let [cores1, cores2,, cores3] = cores()

//desestruturando texto em variaveis
let text = "Olá mundo, vai tomar no cu"

let [...text_splt] = text.split(" ")

console.log(text_splt) //  ["Olá", "mundo,", "vai", "tomar", "no", "cu"]
