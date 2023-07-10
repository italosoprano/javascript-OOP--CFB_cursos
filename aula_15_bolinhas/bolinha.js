const palco = document.querySelector(`#palco`)
const num_objetos = document.querySelector("#num_objetos")
const txt_qtde = document.querySelector("#txt_qtde")
const btn_add = document.querySelector("#btn_add")
const btn_remover = document.querySelector("#btn_remover")

let larguraPalco =  palco.offsetWidth 
let alturaPalco = palco.offsetHeight
//propriedade que passa o tamanho da tela, largura e altura.
let bolas = []
//array para suportar o numero de bolas.
let numBola = 0
//contador do numero de objetos em tela.

//criação da classe que vai ser instanciado e criar os objetos em tela.
class Bola {
    constructor(arrayBolas, palco){
        this.tam = Math.floor(Math.random()*15)+11
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.px = Math.floor(Math.random()*(larguraPalco-this.tam))
        this.py = Math.floor(Math.random()*(alturaPalco-this.tam))
        this.velX = Math.floor(Math.random()*5)+0.5
        this.velY = Math.floor(Math.random()*5)+0.5
        this.dirX = (Math.random()*10) > 5 ? 1 : -1 
        this.dirY = (Math.random()*10) > 5 ? 1 : -1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now() + "_" + Math.floor(Math.random()*1000000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar.bind(this), 10)
        this.eu = document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML=numBola
    }
    minhaPos = () =>{
        return this.bolas.indexOf(this)
    }
    remover = () =>{
        clearInterval(this.controle)
        this.arrayBolas = this.arrayBolas.filter((b) => {
            if(b.id != this.id){
                return b
            }
        })
        this.eu.remove()
        numBola--
        num_objetos.innerHTML=numBola
    }
    desenhar = () =>{
        const div = document.createElement("div")
        div.setAttribute("id", this.id)
        div.setAttribute("class", "bola")
        div.setAttribute("style", `left: ${this.px}px; top: ${this.py}px; width: ${this.tam}px; height:${this.tam}px; background-color: rgb(${this.r}, ${this.g}, ${this.b})`)
        this.palco.appendChild(div)
    }
    colisao_bordas = () =>{
        if(this.px + this.tam >= larguraPalco){
            this.dirX = -1
        }else if(this.px <= 0 ) {
            this.dirX = 1
        }
        if(this.py + this.tam >= alturaPalco){
            this.dirY = -1
        } else if(this.py <= 0) {
            this.dirY = 1
        }
    }
    controlar = () =>{
        this.colisao_bordas()
        this.px += this.dirX*this.velX
        this.py += this.dirY*this.velY
        this.eu.setAttribute("style", `left: ${this.px}px; top: ${this.py}px; width: ${this.tam}px; height:${this.tam}px; background-color: rgb(${this.r}, ${this.g}, ${this.b})`)
        if(this.px > larguraPalco || this.py > alturaPalco) {
            this.remover()
        }
    }
}

window.addEventListener("resize", (Evt) => {
    larguraPalco =  palco.offsetWidth 
    alturaPalco = palco.offsetHeight
})

btn_add.addEventListener("click", (Evt) => {
    const qtde = txt_qtde.value
    for (i=0; i< qtde; i++) {
        bolas.push(new Bola(bolas, palco)) 
    }
})

btn_remover.addEventListener("click", (Evt) => {
    bolas.map((b) => {
        b.remover()
    })
})

