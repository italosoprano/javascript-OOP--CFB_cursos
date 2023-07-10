/*
Herança é quando você tem uma classe que herda, outra classe, especialmente suas caracteristicas.
A classe pai, cede metodos e propriedades para a classe filho.
*/

const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros = document.querySelector(".carros")
const btn_addCarro = document.querySelector("#btn_addCarro")

let a_carros = []

f_tipoMilitar.addEventListener("click", () => {
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

f_tipoNormal.addEventListener("click", () => {
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
})

const gerenciarExibicaoCarros = () => {
    carros.innerHTML=""
    a_carros.forEach((el) => {
        const div = document.createElement("div")
        div.setAttribute("class", "carro")
        div.innerHTML = `Nome: ${el.nome} <br/>`
        div.innerHTML += `Portas: ${el.portas} <br/>`
        div.innerHTML += `Cor: ${el.cor} <br/>`
        div.innerHTML += `Blindagem: ${el.blindagem} <br/>`
        div.innerHTML += `Munição: ${el.municao} <br/>`
        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener("click", () => {
    if (f_tipoNormal.checked){
        const c = new carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    } else {
        const c = new militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)
    }
    gerenciarExibicaoCarros()
})

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

class militar extends carro { //extends é uma palavra reservada que faz o objeto filho (passeio), receber a herança do objeto pai (carro).
    constructor(nome, portas, cor, blindagem, municao) {
        super(nome, portas) //super serve para receber atributor diretamente do pai.
        this.cor = cor
        this.blindagem = blindagem
        this.municao = municao
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