/*
como fazer redirecionamento de pagina

*/

const url = document.querySelector("#url")
const btn_url = document.querySelector("#btn_url")

btn_url.addEventListener("click", (evt) => {
    window.location = url.value //redireciona para a pagina digitada
    
    /*
    window.location + url ou +

    .replace() = redireciona para uma pagina, fazendo com que nao se consiga voltar para a página anterior, por ela ser removida da url.
    .assign() = similar ao replace, porém, não substitui a url.
    .reload() = recarrega a página.

    window.hitory + 

    .back() = vai para a pagina anterior
    .forward() = vai para a proxima página
    .length() = tamanho do historico
    .go(number) = numero de páginas que ele vai, positivo pra frente, negativo para trás. 

    */
})

