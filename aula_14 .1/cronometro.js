/*
o uso de data no javascript se da pelo uso da classe Date.
é necessario instanciar o Date para usar a maioria dos seus metodos, mas alguns podem ser utilizados sem a necessidade de instanciar, apenas o invocando.
*/
const div_data = document.querySelector("#div_data")
const div_relogio = document.querySelector(".div_relogio")
const btn_ativar = document.querySelector("#btn_ativar")
const btn_parar = document.querySelector("#btn_parar")
const tmp_alarme = document.querySelector("#tmp_alarme")
const hora_alarme = document.querySelector("#hora_alarme")
const timer = document.querySelector("#timer")

let som_alarme = new Audio()
som_alarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click", () => {
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tmp_alarme.value * 1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    let horas = dt_alarme.getHours()
    horas = horas < 10 ? "0" + horas : horas
    let minutos = dt_alarme.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos
    let segundos = dt_alarme.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos
    hora_alarme.innerHTML= `Hora alarme : ${horas} : ${minutos} : ${segundos}`
})

btn_parar.addEventListener("click", () => {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = 'Hora alarme :'
    tmp_alarme.value = "0"
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime = 0
})

const data = new Date()


let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia
let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes
const data_r = `${dia} / ${mes} / ${data.getFullYear()}`
div_data.innerHTML = data_r


const relogio = () => {
    const data = new Date()
    let horas = data.getHours()
    horas = horas < 10 ? "0" + horas : horas
    let minutos = data.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos
    let segundos = data.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos
    let tempo = `${horas} : ${minutos} : ${segundos}`
    div_relogio.innerHTML = tempo

    if(alarme_ativado && !alarme_tocando) {
        if(data.getTime() >= ts_alarme) {
            alarme_tocando=true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

/*
tratamentoHoras = (horas, minutos, segundos) => {
    const data = new Date()

    horas = data.getHours()
    horas = horas < 10 ? "0" + horas : horas
    
    minutos = data.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos
    
    segundos = data.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos

    return hora minutos, segundos 
}
*/

const intervalo = setInterval(relogio, 1000) //função de callback que chama uma função a cada determinado tempo. 




/*
abaixo alguns dos metodos mais utilzados.

getDate() = dia do mês.
getDay() = dia da semana.
getFullYear() = ano com 4 digitos.
getHour() = horas.
getMiliseconds() = milisegundos.
getMinutes() = minutos.
getMonths() = meses.
getSeconds() = segundos.
getTime() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC).
Date.now() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC).
getTimezoneOffset() = timezone da localidade.
setDate() = define um dia do mês para a data.
setMonths() = define um mês para a data.
setFullYear() = Define um ano para a data.
SetHours() = Define horas.
SetMinutes() = Define minutos.
setSeconds() = Define segundos.
setMiliseconds() = Define Milisegundos.
toDateString() = Retorna somente a data. 
*/