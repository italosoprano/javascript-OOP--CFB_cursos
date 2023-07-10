const pessoa = {
    nome: "",
    idade: 0,
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    }
}

const nomeInput = document.querySelector("#f_nome")
const idadeInput = document.querySelector("#f_idade")
const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

const addPessoa = () => {
    const div = document.createElement("div")
    div.setAttribute("class", "pessoa")
    div.innerHTML = `Nome: ${pessoa.getNome()}<br/>Idade: ${pessoa.getIdade()}`
    res.appendChild(div)
}

btn_add.addEventListener("click", (evt) => {
    pessoa.setNome(nomeInput.value)
    pessoa.setIdade(idadeInput.value)
    nomeInput.value=""
    idadeInput.value=""
    addPessoa()
})