const btn_alert = document.querySelector("#btn_alert")
const btn_confirm = document.querySelector("#btn_confirm")
const btn_prompt = document.querySelector("#btn_prompt")

btn_alert.addEventListener("click", (evt) => {
    alert("oi, meu chapa!!!") //cria uma caixa de mensagem na tela.
})
btn_confirm.addEventListener("click", (evt) => {
    const retorno = confirm("vai confirmar ou nao, filho da puta?") //cria uma caixa de mensagem com botoes de confirmação sim ou não, que retorna um valor em boolean.
    if(retorno) {
        console.log("confirmou esse otario")
    } else {
        console.log("cuzão do caralho!!")
    }
})
btn_prompt.addEventListener("click", (evt) => {
    const nome = prompt("Fala algo aeh!!")
    if(prompt == null) {
        console.log("falou nada!!!")
    } else {
        console.log(`O que ele disse foi: ${nome}` )
    }
})
