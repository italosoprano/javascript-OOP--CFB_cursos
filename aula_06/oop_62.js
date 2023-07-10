/*
Herança é quando você tem uma classe que herda, outra classe, especialmente suas caracteristicas.
A classe pai, cede metodos e propriedades para a classe filho.
*/

class carro  { //classe pai ou base
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function() {
        this.ligado = true
    }
    desligar = function() {
        this.ligado = false
    }
    setCor = function(cor) {
        this.cor = cor
    }
}

class passeio extends carro { //extends é uma palavra reservada que faz o objeto filho (passeio), receber a herança do objeto pai (carro).
    constructor(nome, portas, steps, macaco, escada, lugares) {
        super(nome, portas) //super serve para receber atributor diretamente do pai.
        this.steps = steps
        this.macaco = macaco
        this.escada = escada
        this.lugares = this.lugares
        this.setCor("branco")
    }
    darPauEmCarroTunado = function() {
        if(this.escada > 0) {
            return "Com certeza!!!"
        }
    }
}

const c1 = new carro("normal", 4)
c1.ligar()
c1.setCor("Azul")

const c2 = new passeio("Uno da Firma", 2, 1, 1, 2, 5)

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("------------------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${c2.ligado}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Step: ${c2.steps}`)
console.log(`Macaco: ${c2.macaco}`)
console.log(`Escada: ${c2.escada}`)
console.log(`Lugares: ${c2.lugares}`)
console.log(`Da Pau em carro tunado: ${c2.darPauEmCarroTunado()}`)
console.log("------------------------")