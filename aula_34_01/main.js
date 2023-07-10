//js da página sem ser o head.
//importar o modulo para utilizar aqui

import { Cxmsg } from "./caixa"

/*
não é mais necessario usar o config

const config = {
    cor: "#48f"
}

nem instanciar o modulo

const cxmsg = new Cxmsg(config)

caso queira mudar a cor da caixa, cria-se a const config = {cor: "valor"} e defini se com o uso de Cxmsg.config(config)
*/

const $btnMostrarcxmsg = document.querySelector("#btnMostrarcxmsg")

$btnMostrarcxmsg.addEventListener("click", (evt) => {
    Cxmsg.mostrar("Olá", "teste bem sucedido!!!")
})