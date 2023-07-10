/*

*/

class cursos {
    static cursos = ["javascript", "c++", "arduino", "java", "c#", "raspberrypie"]

    constructor(){}

    static getTodosCursos() {
        return this.cursos
    }

    static getCurso(i_curso) {
        return this.cursos[i_curso]
    }

    static addCurso(novoCurso) {
        this.cursos.push(novoCurso)
    }

    static apagarCursos() {
        this.cursos = []
    } 
}

export default cursos