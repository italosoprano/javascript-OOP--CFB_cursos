/*
regex:

são um padrao de caracteres que servem para alterar o comportamento dentro de algumas funções especificas. 
geralmente usa-se em espressões que necessitam de parametros sendo passadas para funcionarem.
usa-se /parametro/ e os modificadores. 
caso sejam strings por exemplo, /palavra/mod
para criar padroes podemos inserir o valor dentro de um [xyz], eles serão buscados de maneira independente e não conjunta
*/

let nome = new String("Mochi Santoro Soprano da Silva Sauro") 

console.log(nome) //imprimi o objeto string
console.log(nome.search(/s/i)) //vai pesquisar todos os s (independente da formatação de maiuscula e minuscula)
console.log(nome.match(/o/ig)) //vai ver todas as combinações com a letra o (independente da formatação e de maneira global)
console.log(nome.replace(/Santoro Soprano da Silva Sauro/ig, "Lindo")) //vai substituir o "Santoro Soprano da Silva Sauro" por "Lindo" (independente da formatação e de maneira global)

/*
modificadores:

i = ignorar o case sensitive, ignorando se a letra ta em minusculo ou maiusculo.
g = utilizar de maneira global, não parando no primeiro retorno encontrado para determinada situação.
[xyz] = buscar os valores de maneira independente, sem precisarem estar em conjunto.
[a-z] = buscar valores de a até z, qualquer valor nesse range.
[a-z | 0-9] = buscar de a até z e de 0 a 9. O pipe serve para dividir multiplas buscas.
    meta caracteres:
\d = apenas caracteres numerais
\s = espaços
\b = alfanumericos

    quantificadores:
+ = considera uma sequencia de caracteres iguais como sendo uma agrupamento e nao separados
* = considera uma ocorrencia de caracteres ou o primeiro caracter declarado.
? = considera as ocorrencias de cada caracter declarado.
*/