/*
versão utilizando setTimeOut():

*/

const carro = document.querySelector("#carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")
const btn_parar = document.querySelector("#btn_parar")

const init = () => {
    carro.style="position: relative; left: 0px; width: 150px;" 
    let tmax= window.innerWidth - parseInt(carro.style.width)

}

window.onload=init()

let anima = null
let tmax= null

const move = (dir) => {
    if(dir > 0){
        if(parseInt(carro.style.left) <= tmax) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
            anima = setTimeout(move, 20, dir)
            //setInterval(função, tempo miliseconds, parametros da função)
            //função criada de maneira recursiva, chamando a si mesma depois de um intervalo de tempo. 
        } else {
            clearTimeout(anima)
        }
    } else if(dir < 0){
        if(parseInt(carro.style.left) >= tmax) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
            anima = setTimeout(move, 20, dir)
            //setInterval(função, tempo miliseconds, parametros da função)
            //função criada de maneira recursiva, chamando a si mesma depois de um intervalo de tempo. 
        } else {
            clearTimeout(anima)
        }
    }
    carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
}

btn_esquerda.addEventListener("click", (evt) => {
    clearTimeout(anima)
    move(1)
    //a função será invocada apenas uma vez, pois ela foi programada de maneira recursiva.
})

btn_direita.addEventListener("click", (evt) => {
    clearTimeout(anima)
    move(-1)
    //a função será invocada apenas uma vez, pois ela foi programada de maneira recursiva.
})

btn_parar.addEventListener("click", (evt) => {
    clearTimeout(anima)
    //função para interrromper o loop recursivo 
})

window.addEventListener("resize", () => {
    tmax= window.innerWidth - parseInt(carro.style.width)
})

/*
diferenças entre o setInterval() e o setTimeOut():

o setInterval gera um intervalo de tempo no qual um codigo vai ser executado repetidas vezes até que ele seja desativado por meio de um clearInterval().

ex: setInterval(função, tempo em milisegundos, parametros da função)
ClearInterval(nome da função que receveu a função)

o setTimeOut por outro lado funciona de maneira diferente, ele vai gerar um time out, ou seja um intervalo de tempo unico em forma de contagem regressiva, no qual ele ira finalizar a contagem e regressiva e ativar a função apenas uma vez. 

ex: setTimeOut(função, tempo em milisegundos, parametros da função)
*/