/*
a função GetboundingClientRect(), é uma função que pertence a classe element. Logo pode ser utilizada para acessas qualquer elemento do HTML.
a função serve para pegar algumas informações referentes ao posicionamento do elemento em tela, como:

botton, top, left, right, height, width, x, y. 
*/

const q1 = document.querySelector("#q1")
const q2 = document.querySelector("#q2")
const posx = document.querySelector("#posx")
const posy = document.querySelector("#posy")
const largura = document.querySelector("#largura")
const altura = document.querySelector("#altura")

let posicaoComDOMRectq1 = q1.getBoundingClientRect()

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

console.log(q1.getBoundingClientRect())
