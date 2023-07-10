/*
o uso do prototype serve para criar uma nova propriedade ou metodo na classe pricipal que nao havia sido criado originalmente.
*/

class carro{
    constructor(tipo, estagioTurbo) {
        this.turbo = new turbo(estagioTurbo)
        if(this.tipo == 1) {
            this.velMax = 120
            this.nome = 'normal'
        } else if(this.tipo == 2) {
            this.velMax = 160
            this.nome = 'esportivo'
        } else if(this.tipo == 3) {
            this.velMax = 200
            this.nome = 'super esportivo'
        }
        this.velMax += this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log("---------------")
    }
}

class turbo{
    constructor(e){
        if(e == 0) {
            this.pot=0
        }
        else if(e == 1) {
            this.pot=50
        }
        else if(e == 2) {
            this.pot=75
        }
        else if(e == 3) {
            this.pot=100
        }
    }
}

class carroEspecial extends carro {
    constructor(estagioTurbo){
        super(4, estagioTurbo)
        this.tipoInfo = 1
        this.velMax = 300 += turbo.pot
        this.nome = "Carro especial"
    }
    info(){
        if(this.tipoInfo == 1) {
            super.info()
        } else {
            console.log(`Nome: ${this.nome}`)
            console.log(`Vel. Máxima: ${this.velMax}`)
            console.log(`Turbo: ${this.turbo}`)
            console.log("----------------------")
        }
    }
}

const c1 = new carro(1,0)
const c2 = new carro(1,1)
const c3 = new carroEspecial(3)

c1.info()
c2.info()
c3.info()
