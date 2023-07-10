/*
Além de pessoas também é possivel criar propriedades além de metodos para a classe. 
*/

class carro {
    constructor(marca, tipo) {
        this.nome = marca 
        if(tipo == 1) {
            this.tipo = "esportivo"
            this.velmax = 300
        } else if (tipo == 2) {
            this.tipo = "utilitario"
            this.velmax = 180
        } else if (tipo == 3) {
            this.tipo = "passeio"
            this.velmax = 120
        } else {
            this.tipo = "charanga"
            this.velmax = 100
        }
    }
    // para tornar mais pratico, precisamos criar um metodo para retornar todas essas informações de uma só vez. cria-se uma função que retonar 
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V. Max: ${this.velmax}`)
        console.log("----------------------")
    }
    //podemos ainda criar uma funcionalidade para retornar uma informação especifica.
    getNome() {
        return this.nome
        // retorna o nome
    }
    getTipo() {
        return this.tipo
        // retorna o tipo
    }
    getVelmax() {
        return this.velmax
        // retorna a V. Max
    }
    getInfo() {
        return [this.nome, this, this.tipo, this.velmax]
        // retorna um array com os valores.
    }
    setInfo(nome, tipo) {
        this.nome = nome
        this.tipo = tipo
    }
}

let c1 = new carro("corola", 1)
let c2 = new carro("celtao", 2)
let c3 = new carro("uno de firma", 3)

//criada uma nova variavel vazia, apenas com a atribuição do objeto. 
let c4 = new carro()
c4.setInfo("HB20", 3)

c1.info() // retorna todas as infos dentro da função info()
console.log(c1.getNome) // retorna "corola"
console.log(c1.getInfo) // retorna um array com ["colora", "esportivo", 300]
console.log(c1.getInfo[0]) // retorna valor da posição 0 "corola"

// pedindo para printar na tela a variavel c4.
console.log(c4) // "HB20", Passeio, 120. 