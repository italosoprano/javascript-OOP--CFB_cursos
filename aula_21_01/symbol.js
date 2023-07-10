const nome = Symbol("nome")
const numero = Symbol("numero")
const corUniforme = Symbol("cor do uniforme")

const jogador = {
    nome: "j1"
}

jogador[numero] = 10
jogador[uniforme] = "amarelo"

for (j in jogador) {
    console.log(j)
    //ele nao vai conseguir imprimir na tela, pois os valores passados são escondidos, no maximo vai imprimir o nome: "j1". 
}

console.log(jogador) // objeto {}
console.log(jogador.nome) // "j1"
console.log(jogador[numero]) // 10 
console.log(jogador[corUniforme]) // amarelo