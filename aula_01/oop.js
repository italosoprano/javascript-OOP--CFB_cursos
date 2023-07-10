/*
objetos usando operador New.
cria se uma classe como base para aquele objeto, desde metodos até propriedades. Depois casa objeto instancia-se naquela classe.
pode se manipular as propriedades e metodos de um objeto sem interferir no objeto original, e nem nos outros dessa classe. 
*/

class tpessoa {
    // o metodo construtor() é o metodo automaticamente chamando quando instancia-se um novo objeto dessa classe.
    constructor() {
        this.nome="Italo"
    }
}

// quando eu crio uma nova instancia eu chamo o nome do objeto, no caso pessoa que faz referencia ao objeto pessoa. O pessoa() tem o parenteses vazio, pois ele faz referencia a bloco constructor() dentro do objeto. 
let pteste = new tpessoa()

// console.log(p1.nome) -->  "italo"

class pessoa {
    constructor(pnome){
        this.nome = pnome
    }
}

let p1 = new pessoa("Italo")
let p2 = new pessoa("Helena")
let p3 = new pessoa("Mochi")

console.log(p1) // "Italo"
console.log(p2) // "Helena"
console.log(p3) // "Mochi"
