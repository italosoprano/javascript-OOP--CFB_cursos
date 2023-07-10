/*
Fetch e consumo de API
cria-se uma variavel com nome endpoint e passase o endereço do endpoint da api que será consumida. 

fetch() - podemos trabalhar com dois parametros, sendo o request info o primeiro ou os parametros de configuração, nesse caso, usaremos apenas o primeiro.
*/
const p_temp = document.querySelector("#p_temp")
const p_nivel = document.querySelector("#p_nivel")
const p_press = document.querySelector("#p_press")

const endpoint = "https://primeiraapi--italosoprano.repl.co/"

fetch(endpoint, {mode: "no-cors"}) //retorna uma promisse.

.then(res => res.json()) //converteu a resposta em json
.then(dados => { //pega o valor da resposta já convertida em json e imprimi.
    console.log(dados)
    p_temp.innerHTML = dados.temperatura
    p_nivel.innerHTML = dados.nivel
    p_press.innerHTML = dados.pressao
})

let dados = {
    nome: "italo",
    sobrenome: "Soprano",
    idade: 27,
}

let cabecalho ={
    Method: "POST",
    body: JSON.stringify(dados),
}

const gravarDados = () => {
    const endpoint = "https://primeiraapi--italosoprano.repl.co/"
    fetch(endpoint, cabecalho)
    .then(res => res.json())
    .then(ret=>{
        console.log(ret)
    })
}