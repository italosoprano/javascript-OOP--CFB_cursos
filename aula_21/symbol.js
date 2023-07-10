class jogador {
    constructor(nome) {
        this.nome = nome
        this.id = Symbol()
    }
}

let jogadores = [new jogador("j1"), new jogador("j2"), new jogador("j3"), new jogador("j4"), new jogador("j5"), new jogador("j6"), new jogador("j7"), ]

let s = []

let s_jogadores = jogadores.filter((j) => {
    return j.nome == "j1"
})

s =s_jogadores.map((j) => {
    return j.id
})

console.log(jogadores) // array com todos os jogadores
console.log(s_jogadores) // array com os jogadores de nome j1
console.log(s) // id dos jogadores com nome j1

/* 
funções symbol:

a função symbol retorna um objeto do tipo symbol com identificação unica.

const c1 = symbol()
const c2 = symbol()

console.log(c1 === c2) --> false, pois possuem registradores diferentes.

const c3 = symbol.for("italo")
const c4 = symbol.for("italo")

console.log(c3 === c4) --> true, pois possuem o mesmo valor
console.log(typeOf(c1)) --> Symbol
console.log(typeOf(c3)) --> italo
console.log(Symbol.keyFor(c1)) --> undefined
console.log(Symbol.keyFor(c3)) --> italo

*/