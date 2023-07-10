/*
existem situações descritas em que o uso do ; é obrigatorio em js. 
*/

//caso o loop seja um bloco unico, sem um comando especifico a ser executado em cada repetição.
let i = null
for(i = 0; i < 10 ; i++);
console.log(i) // 10

//em situações que existem mais de uma instrução por linha do codigo.
let j = null; j = 10

//quando a instrução na proxima linha começa com [] ou ()
let k = 1;
[]