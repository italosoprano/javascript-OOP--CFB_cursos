/*
Funções Novas (ES6):

funções implementadas a partir de ES6.
*/

let nome = new String("Mochi Santoro Soprano da Silva Sauro")

nome.startsWith("Mochi") // true. Pois começa com Mochi. Caso "M", seria true ainda. Caso "Santoro", false.
nome.endsWith("Sauro") // true. Pois finaliza com "Sauro", "o" seria true também.
nome.includes("da") //true. Pois "da" está incluso na string.
nome.repeat(2) //vai repetir o nome 2x MSSSS.
nome.charCodeAt(0) // retornar o codigo do caracter nessa posição.
String.fromCodePoint(66) //b. 66 e o codigo correspondente ao b.