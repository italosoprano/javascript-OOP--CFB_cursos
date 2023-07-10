/*
a função acessKey() é um metodo do objeto element que permite você definir uma tecla de atalho, ou simplesmente você criar uma tecla de atalho, para uma funcionalidade. 
ao se definir uma acesskey para as funcionalidades, é necessario usar a tecla com a tecla alt pressionada.
não é acessivel com o metodo querySelector.
*/

const q1 = document.querySelector("#q1")
const q2 = document.querySelector("#q2")
const posx = document.querySelector("#posx")
const posy = document.querySelector("#posy")
const largura = document.querySelector("#largura")
const altura = document.querySelector("#altura")



const info = (el) => {
    let posicaoQ = el.getBoundingClientRect()
    posx.innerHTML= `posx : ${posicaoQ.x}`
    posy.innerHTML= `posx : ${posicaoQ.y}`
    largura.innerHTML= `posx : ${posicaoQ.width}`
    altura.innerHTML= `posx : ${posicaoQ.height}`
}

q1.addEventListener("click", (evt) => {
    info(q1)
})
q2.addEventListener("click", (evt) => {
    info(q2)
})
