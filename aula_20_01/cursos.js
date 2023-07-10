/*
export default = exporta uma função como sendo a principal:

digamos que nos temos uma seja a principal utilizada em um componente, ela pode ser exportada para ser utilizada em outro componente, com a declaração de "export default". 
ela pode ser declarada na declaração da variavel:

export default function fuladoDeTal(){}

ou, a função pode ser declarada e só depois ser exportada. 

function fuladoDeTal(){}

export default fulanoDeTal(){}

mas, somente 1 função pode ser exportada dessa forma. 
*/

const cursos = ["javascript", "c++", "arduino", "java", "c#", "raspberrypie"]

export default function getTodosCursos(){
    return cursos
}

export {cursos}