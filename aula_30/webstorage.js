/*
em se tratando de webstorage é possivel checar na area de inspeção do navegador web, na sessao de aplication.
existem duas formas de armazenamento:
    localtorage = armazenamento dentro do navegador web.
    sessionstorage = armazenamento durante a sessão de acesso a página.

o objeto pertence ao window, logo pode se usar com ou sem o window. Definindo o tipo de armazenamento e aplicando uma combinação de chave e valor. 
ex: localstorage.setItem("chave: valor")

*/

const f_texto = document.querySelector("#f_texto")
const p_texto = document.querySelector("#p_texto")
const btn_texto = document.querySelector("#btn_texto")

btn_texto.addEventListener("click", (evt) => {

})

//para definir um item, usa-se uma chave e um valor, se usarmos o mesmo metodo denovo, com a mesma chave, ele vai redefinir o valor.
localStorage.setItem("mama", "minha rola")
localStorage.setItem("Helena", "weeedy, to weeedy wedy wedy")
localStorage.setItem("Zero", "Soyoz Nyerooshimiy Ryespooblik svobodnikh")
localStorage.setItem("Mari", "SMOOOKE WEEED EVERYDAY")
localStorage.setItem("Mochi", "FofGORDO")

//com esse metodo nos podemos recuperar o valor de qualquer item, apenas passando o valor da sua chave. Ele retorna uma string ou null. 
localStorage.getItem("mama")

//localStorage.clear() serve para limpar todos os dados armazenados.
