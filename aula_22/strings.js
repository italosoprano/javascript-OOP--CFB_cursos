/*
trabalhando com função para manipular strings:

existem duas formas de trabalhar com strings, usando uma variavel do tipo string ou uma classe do tipo string.

let exemplo = "palavra"

console.log(exemplo) --> palavra 
console.log(typeOf(exemplo)) --> string

para usar as funções em uma variavel do tipo string, basta usar variavel. e o metodo ou propriedade desejada. 

exemplo.(propriedade ou metodo())
*/

let eu = new String("italo")
let nome = new String("Mochi Santoro Soprano da Silva Sauro")
let nome2 = new String("Mochi Santoro Soprano da Silva Sauro")
// a classe strring trata cada letra da string como uma propriedade: string {0: M, 1: o, 2: c, 3: h, 4: i}

//funções antigas para stings:  

nome.charAt(0) // mostra o caracter correspondente ao indice da referencia.
nome.charCodeAt(0) // mostra o codigo correspondente ao caracter no indice da referencia.
nome.concat(eu) // concatena o valor da string nome com o da string eu, gerando Mochiitalo
nome.indexOf("m") // retorna o index do caracter na string. Nesse caso m = 0. Se passado uma combinação de valores, como ("mo"), ele retorna o primeiro valor que tenha essa combinação de strings. Caso seja passado algo que ele não possua na string, ele retorna -1.
nome.lastIndexOf("h") // ele retornar o index da ultima caracter encontrado.
nome.localeCompare(nome2) // compara o valor de dois objetos strings, se eles forem iguais retorna um 0, se a primeira for maior ela retorna 1, se ela for menor ela retorna -1. Se você tentar comparar nome == nome2 ou nome === nome2 ele sempre vai retornar um false, pois estamos comparando 2 objetos do tipo string e não 2 variaveis com valor de strings. 
nome.replace("M", "B") // subtitui o primeiro caracter correspondendo ao passado pelo novo caracter passado. Pode ser usado com palavras inteiras também.
nome.search("Mo") // procura e retorna a primeira incidencia desse caracter ou combinação de caracter na minha string. 
nome.slice(0, 1) // M. Ele precisa do valor do index para iniciar e para finalizar, no caso, ele inicia em 0 e vai até o 1, parando nele. 
let arr_nome = nome.split(" ") // cria um array com divisões nos espaços entre as palavras, nesse caso, ele vai criar um array da seguinte forma: [0: Mochi, 1: Santoro, 2: Soprano, 3: da, 4: Silva, 5: Sauro], pois o ponto de quebra foi o espaçamento.
let nomeSubstring = nome.substring(0, 5) //Mochi. ele cria uma substring similar ao do slice. Precisa de uma posição para iniciar, 0, e uma posição após o caracter desejado.
let nomeSubstr = nome.substr(0, 4) // Mochi. ele cria uma string partindo do valor index 0, e seguindo por mais 4 caracteres.
nome.toLocaleUpperCase() //transforma tudo para o maiusculo
nome.toLowerCase() //transforma tudo para o minusculo
nome.valueOf() //valor do objeto string
num = 10
num = num.toString() //"10". Transforma o valor em uma string.