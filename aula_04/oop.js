/*
substituindo class por function: 
Cria se uma classe de obejeto a partir de uma função.
Usando o class necessita-se de um elementos construtor dentro do escopo do objeto.
Usando function, passe-se os parametros que seriam usados dentro do bloco construtor para usar dentro do parametro da function.
Os metodos como getNome() são criados com base em funções anonimas. Pode-se usar arrow function também. 
É necessario utitlizar um this. antes de cada metodo criado dessa forma e separar cada elemento do objeto por uma ",".

*/

function Pessoa(pnome, pidade) {
    this.nome = pnome, 
    this.idade = pidade,

    this.getNome=()=>{
    return this.nome
    },
    this.getIdade = function() {
        return this.idade
    },
    this.setNome = function(nome) {
        this.nome = nome
    },
    this.setIdade = function(idade) {
        this.idade = idade
    },
    this.info = function(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.idade}`)
        console.log("----------------------")
    }
}

let pessoas = []

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

const addPessoa = () => {
    res.innerHTML=""
    pessoas.map((p) => {
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click", (evt) => {
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoa()
})
