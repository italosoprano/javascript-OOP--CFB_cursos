/*
metodos de validação nativas do javascript

*/

const f_nome = document.querySelector("#f_nome")
const f_nota = document.querySelector("#f_nota")
const f_msg = document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click", (evt) => {
    //variavel recebe o campo que será requisitado a validação
    let estadoDeValicao = f_nota.validity

    //utiliza-se o if para checar um tipo especifico de validação
    if(estadoDeValicao.valueMissing){
        //passa se uma mensagem de validação, caso o requisitado não esteja de acordo.
        f_nota.setCustomValidity("Este campo é obrigatório")
        //mensagem caso a pessoa nao preencha o campo.
    } else if(estadoDeValicao.rangeOverflow) {
        f_nota.setCustomValidity("Essa nota está acima do permitido.")
        //mensagem caso a pessoa dê uma nota mais alta que o permitido.
    } else if(estadoDeValicao.rangeUnderflow) {
        f_nota.setCustomValidity("Essa nota está abaixo do permitido.")
        //mensagem caso a pessoa dê uma nota mais baixa que o permitido.
    }
    //pode se usar o if(f_nota.validity.tipoDeValidacao){msg = "coisa tal"; f_msg.innerHTML = msg}

    //aparece aquele alerta padrão do campo do html, agora personalizado.
    f_nota.reportValidity()
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