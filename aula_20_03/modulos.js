/*
como uma classe foi exportada como default, não precisamos declarar seu nome, ao exporta-la. 
*/

import c_cursos from "./cursos"

c_cursos.addCurso("Docker")

console.log(c_cursos.getTodosCursos())