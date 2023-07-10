/*
funções literais: 
Tem um conceito diferente dos objetos tradicionais. 
Nos objetodos tradicionais utilizamos um operador NEW para criar uma nova instancia daquele objeto. Dessa forma eles se tornam objetos independentes que cada um aponta para um endereço de memoria diferente.
No caso dos literais, não é isso que ele faz, eles apontam todos para o mesmo endereço de memoria.
Sendo assim cada vez que ocorre uma nova instancia daquele codigo ele modifica todas as instancias de codigo.

*/

const pessoa = {
    nome,
    idade,
    getNome: () => {
        return this.nome
    },
    getIdade: () => {
        return this.idade
    },
    setNome: (nome) => {
        this.nome = nome
    },
    setIdade: (idade) => {
        this.idade = idade
    }
}

const p2 = pessoa
const p3 = pessoa

p3.nome="italo" // primeira forma de setar um nome (propriedade do objeto)
p2["nome"]="Helena" //segunda forma de setar um nome (propriedade de um objeto)
pessoa.setNome("Mochi") // forma de setar um nome por meio de um metodo do objeto. 

console.log(pessoa.nome) // forma de imprimir uma propriedade do objeto.
console.log(pessoa.getNome()) // forma de imprimir uma propriedade atraves de um metodo do objeto.
console.log(p3.nome) // --> "Mochi", "Mochi", "Mochi". 