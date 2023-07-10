/*
Para usar esse tecnica é necessario o uso da biblioteca .Math
transformando os valores da posição do cursor do mouse em graus.

*/

const olhos = [...document.querySelector(".olhos")] 

let posX_mouse=0
let posY_mouse=0
//posição dos valores de x e y que irão receber os valores do mouse.

window.addEventListener("mousemove", (evt) => {
    //window se refere a area da janela de visualização e mousemove ao movimento do mouse.
    posX_mouse=evt.clientX
    posY_mouse=evt.clientY
    //evt.client vai passar para as variaveis a posição de x e y do mouse, sendo o evento ativado assim que o mouse se move.
    const rot = Math.atan2(posY_mouse, posX_mouse) * 180 / Math.PI
    //atan2 retorna o arco tangente de 2 coenficientes, no caso dos valores passados nas variaveis de referencia. 
    //para transformar em graus devemos multiplicar por 180 e dividir por PI
    olhos.map((e) => {
        e.style.trasform="rotate("+rot+"deg)"
    })
})

