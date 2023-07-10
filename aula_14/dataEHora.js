/*
o uso de data no javascript se da pelo uso da classe Date.
é necessario instanciar o Date para usar a maioria dos seus metodos, mas alguns podem ser utilizados sem a necessidade de instanciar, apenas o invocando.
*/
const data_div = document.querySelector(".data_div")
const relogio_div = document.querySelector(".relogio_div")
const calendario_div = document.querySelector(".calendario_div")

const data = new Date()

let weekDay_names = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
let weekDay = data.getDay()
calendario_div.innerHTML = weekDay_names[weekDay]

let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia
let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes
const data_r = `${dia} / ${mes} / ${data.getFullYear()}`
data_div.innerHTML = data_r


const relogio = () => {
    const data = new Date()
    let horas = data.getHours()
    horas = horas < 10 ? "0" + horas : horas
    let minutos = data.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos
    let segundos = data.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos
    let tempo = `${horas} : ${minutos} : ${segundos}`
    relogio_div.innerHTML = tempo
}

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