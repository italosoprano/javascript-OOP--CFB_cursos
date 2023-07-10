/*
trabalhando com modulos.
precisa estar trabalhando dentro de um servidor, como liver server, ou WAMP ou CHAMP.
para poder usar um script js como modulo, precisamos dentro da tag script definir um type="module". 
devemos usar o import { nomeItem } from "localDeOrigem/nomeArquivo.js";
*/

import { cursos } from "./cursos.js";
import { carros } from "./cursos.js";

cursos.map((e) => {
    console.log(e)
})

carros.map((e) => {
    console.log(e)
})

//imprimi cada item dos arrays importador. 