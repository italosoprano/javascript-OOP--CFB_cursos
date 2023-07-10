/*
para criar objetos literais, devemos atribuir a uma variavel ou constante (de preferencia uma constante) um par de chaves.
Os atributos devem ser declarados com uma combinação de chave: valor. Incluindo os metodos da função.
chave: função(){}

*/

const objetos = document.querySelector("#objetos")

const computador = {
    cpu: "",
    ram: "",
    hd: "",
    setCpu: (cpu) =>{
        this.cpu = cpu
    },
    setRam: (ram) =>{
        this.ram = ram
    }, 
    setHd: (hd) =>{
        this.hd = hd
    }, 
    info: () =>{
        console.log(this.cpu)
        console.log(this.ram)
        console.log(this.hd)
    }
}

computador["monitor"] = "22pol" //uma forma de adicionar novos metodos
computador.placaDeVideo = "rtx 6mole6dura" //outra forma de adicionar 
computador.teste = () =>{
    console.log("olá, isso funcionou?")
}
//utilizando a forma anterior, podemos também adicionar metodos.
delete(computador.hd)
//iremos deletar a propriedade hd do computador, se ele for chamado será undefined. 

const c1 = Object.assign({}, computador) //assign permite clonar um objeto literal, no caso foi clonado o objeto computador para o novo objeto chamado de c1, agora ele possui todas as propriedades e metodos de computador.

const o1 = {obj1: "1"}
const o2 = {obj2: "2"}
const o3 = {obj3: "3"}
const o4 = {obj4: "4"}

const o5 = Object.assign(o1, o2, o3, o4) 
//houve uma conversão de varios objetos para o 05, se dermos um console.log(c5) ==> {obj1: "1", obj2: "2", obj3: "3", obj4: "4"} 

const comp1 = Object.create(computador) //foi criado um novo objeto: comp1, que é um objeto, que ganhou como base, o objeto computador. 

/*------------------------------------------------------------------------*/

const computadores = [
    {
        cpu: "i9",
        ram: "64 GB",
        hd: "2 TB"
    },
    {
        cpu: "i7",
        ram: "32 GB",
        hd: "2 TB"
    },
    {
        cpu: "i5",
        ram: "16 GB",
        hd: "1 TB"
    },
]

computadores.map((c) => {
    const div = document.createElement("div")
    div.innerHTML = `${c.cpu} <br/> ${c.ram} <br/> $${c.hd}`
    div.setAttribute("class", "computador")
    objetos.appendChild(div)
})