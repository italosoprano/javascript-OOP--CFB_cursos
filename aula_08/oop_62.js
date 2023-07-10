/*
transformando um objeto em um json e eum json em um objeto do tipo literal. 

para transformar de um objeto literal para um json devemos usar o metodo json. stringify = que transforma em um json em forma de string, ou transformar uma string em um objeto usando o metodo parse. 
*/

const pessoa = {
    nome: "italo",
    canal: 'não',
    cursos: 'javascrit',
    aulas: {
        aula_01: 'variaveis',
        aula_02: 'operadores',
        aula_03: 'condicionais'
    }
}

const pessoa_json = JSON.stringify(pessoa)

