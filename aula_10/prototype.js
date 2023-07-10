/*
o uso do prototype serve para criar uma nova propriedade ou metodo na classe pricipal que nao havia sido criado originalmente.
*/

const Nave = function(energia) {
    this.energia = energia
    this.disparo = 5
}

const n1 = new Nave(100)

Nave.prototype.vidas =  3 //prototype usado para criar um novo atributo para a classe Nave

Nave.prototype.disparar = function(){ //aqui utilizamos para criar um novo metodo de classe
    if(this.disparo > 0) {
        this.disparo -- 
    }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(Nave)
console.log(n1)
console.log(n1.disparos)

