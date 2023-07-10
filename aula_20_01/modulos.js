/*
o import pode ser feito de duas formas
import getTodosCursos, {cursos} from "./cursos2.js"
*/

import getTodosCursos from "./cursos.js"; //sem uso de chaves.
import { cursos } from "./cursos.js"; //precisa do uso de chaves.


console.log(cursos)
console.log(getTodosCursos())