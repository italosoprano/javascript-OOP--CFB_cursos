const $timer = document.querySelector("#timer")
const $btn_iniciar = document.querySelector("#btn_iniciar")
const $btn_parar = document.querySelector("#btn_parar")
const $btn_zerar = document.querySelector("#btn_zerar")

let intervalo = null
let tmpini = null

const contador = () => {
    const tmpatual = Date.now()
    let cont = tmpatual - tmpini
    let seg = (tmpatual- tmpini) / 1000 
    $timer.innerHTML = converter(seg)
}

const converter = (seg) =>{
    const hora = Math.floor(seg/3600) //a cada 3600 seg = 1 hora
    const resto = seg%3600 //resto é a parte que sobra a cada hora
    const minuto = Math.floor(resto/60) //resto/60 forma os minutos
    const segundo = Math.floor(resto%60) //resto%60 forma os segundos

    const tempoformatado = (hora < 10 ? "0" + hora : hora) + ":" + (minuto < 10 ? "0" + minuto : minuto) + ":" + (segundo < 10 ? "0" + segundo : segundo)  //`${hora < 10 ? 0 + hora : hora} : ${minuto < 10 ? 0 + minuto : minuto} : ${segundo < 10 ? 0 + segundo : segundo}`
    
    return tempoformatado
}

$btn_iniciar.addEventListener("click", (evt) => {
    tmpini = Date.now()
    intervalo = setInterval(contador, 1000)
})

$btn_parar.addEventListener("click", (evt) => {
    clearInterval(intervalo)
})

$btn_parar.addEventListener("click", (evt) => {
    tmpini = Date.now()
    $timer.innerHTML= "00 : 00 : 00" 
})