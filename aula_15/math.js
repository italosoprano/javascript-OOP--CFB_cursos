/*
É uma biblioteca de classe estática, não precisa ser instanciada.
.round() = arredonda para cima
.floor() = arredonda para baixo
.random() = gera um numero aleatorio entre 0 e 1
    para gerar um numero superior a 1, é necessario multiplicar pelo numero desejado. Ele vai sempre dar um valor menor que o maximo, logo, multiplica-se pelo numero + 1 e usa-se o floor para arredondar para baixo. 

    ex: 

    Math
*/

const btn_gerador = document.querySelector(".btn_gerador")

btn_gerador.addEventListener("click", (evt) => {
    evt.preventDefault()
    const mat = document.querySelector(".mat")
    const num = document.querySelector(".num")
    const Numero = num.value
    res = Math.floor(Math.random()*Numero) + 1
    mat.innerHTML = res
})

