/*
Uma promessa ou promisse é uma funcionalidade que gera uma promisse (ou promessa) de que algo será retornado após algo ser executado, sem interferir no restante do funcionamento de um codigo de js.
promisses são muito utilizadas justamente para retornarem valores provenientes de uma API.
    let fulano = new promise ((result, rejected) => {})
em uma promisse ela pode retornar 2 valores:
    ---> result se o codigo estiver tudo certo e sem nenhum erro para retornar um valor.
    ---> rejected se o codigo estiver com algum erro e nao pduer retornar o valor do codigo que ele deveria retorar.
o retorno e feito por meio de then (caso seja verdadeiro) e catch (caso ocorra um erro)
    fulano.then((retorno) => {}) ---> resultado se deu tudo certo
    fulano.catch((retorno) => {}) ---> resultado se deu tudo errado

caso você execute um console.log(promisse()), ela pode imprimir 3 valores.

    fullfiled = ocorreu tudo certo e o resultado foi positivo.
    rejected = ocorreu um erro e o resultado foi negativo.
    undefined = algo ocorreu e a promisse não conseguiu concluir o processo.
*/

const numero = document.querySelector(".numero")
const btn_promessa = document.querySelector(".btn_promessa")

btn_promessa.addEventListener("click", (evt) => {
    numero.innerHTML = "Processando..."
    promessa() // chamado da função que carrega a promisse
        //then e catch podem ser declarados dentro do scopo da função promisse chamada a acima. 
        .then((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove("error")
        numero.classList.add("ok")
        })
        .catch((retorno) => {
            numero.innerHTML = retorno
            numero.classList.add("error")
            numero.classList.remove("ok")
        })
})

const promessa = () => {
    let prometer = new Promise((res, rej) => {
        let resultado = true
        let tempo = 3000
        setTimeout(() => {
            if (resultado) {
                res = "Deu tudo certo!!!"
            } else {
                rej = "Deu tudo errado!!"
            }
        }, tempo)
    })
    return prometer
}

numero.innerHTML = "Esperando."

/* 
a promisse pode ser declarada tanto como uma função como vista acima, como dessa forma a seguir, porem em forma de função é mais viavel pelo fato de poder ser reutilizada varias e varias vezes.

let prometer = new Promise((res, rej) => {
    let resultado = true
    let tempo = 3000
    setTimeout(() => {
        if (resultado) {
            res = "Deu tudo certo!!!"
        } else {
            rej = "Deu tudo errado!!"
        }
    }, tempo)
})

prometer.then((retorno) => {
    numero.innerHTML = retorno
    numero.classList.remove("error")
    numero.classList.add("ok")
})
prometer.catch((retorno) => {
    numero.innerHTML = retorno
    numero.classList.add("error")
    numero.classList.remove("ok")
})
*/