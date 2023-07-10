/*
metodos de validação nativas do javascript

*/

const f_nome = document.querySelector("#f_nome")
const f_nota = document.querySelector("#f_nota")
const f_msg = document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click", (evt) => {
    let msg = null

    //checkValidity() faz uma checagem da validação exigida para o campo
    if(!f_nota.checkValidity()){
        //envia uma mensagem especifica sobre o que houve de errado, caso, ele acuse como erro.
        msg = f_nota.validityMessage
    }

    f_msg.innerHTML = msg
    evt.preventDefault()
})

//metodos de validação do DOM
//checkValidity()
//setCustomValidity()

//propriedades de validação do DOM
//validity
//validationMessage

/*
Propriedades de Validação

customError: true, se uma mensagem de validação personalizada for definida.
patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão
rangeOverflow: true, se o valor de um elemento for maior que seu valor maximo.
rangerUnderflow: true, se o valor de um elemento for menor que seu valor minimo.
stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
tooLoong: true, se o valor de um elemento exceder seu atributo maxLength
typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
valueMissing: true, se um elemento (com atributo obrigatorio) não tiver valor.
valid: true, se o valor de um elemento for válido.
*/