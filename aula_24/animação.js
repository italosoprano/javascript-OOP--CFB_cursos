/*
versão utilizando setInterval():

*/

const carro = document.querySelector("#carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")
const btn_parar = document.querySelector("#btn_parar")

const init = () => {
    carro.style="position: relative; left: 0px" 
}

window.onload=init()

let anima = null

const move = (dir) => {
    carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
}

btn_esquerda.addEventListener("click", (evt) => {
    clearInterval(anima)
    anima = setInterval(move, 20, -1) 
    //setInterval(função, tempo miliseconds, parametros da função)
})

btn_direita.addEventListener("click", (evt) => {
    clearInterval(anima)
    anima = setInterval(move, 20, 1)
    //setInterval(função, tempo miliseconds, parametros da função)
})

btn_parar.addEventListener("click", (evt) => {
    clearInterval(anima)
})

/*
diferenças entre o setInterval() e o setTimeOut():

o setInterval gera um intervalo de tempo no qual um codigo vai ser executado repetidas vezes até que ele seja desativado por meio de um clearInterval().

ex: setInterval(função, tempo em milisegundos, parametros da função)
ClearInterval(nome da função que receveu a função)

o setTimeOut por outro lado funciona de maneira diferente, ele vai gerar um time out, ou seja um intervalo de tempo unico em forma de contagem regressiva, no qual ele ira finalizar a contagem e regressiva e ativar a função apenas uma vez. 

ex: setTimeOut(função, tempo em milisegundos, parametros da função)
*/