/*
como ler arquivos de texto com Fetch:

para isso o arquivo deve estar dentro da mesma pasta no servidor, como por exemplo um arquivo de texto do tipo .txt ou .json
Ele pode inclusive ser modificado 
*/

const texto = document.querySelector("#texto")

const endpoint = "lista.txt"

fetch(endpoint)
.then(res => res.text())
.then(res => {
    console.log(res)
})
