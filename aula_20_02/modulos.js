/*
importação de modulos com renomeamento:

para importar todos os dados disponiveis de uma arquivo js podemos seguir o seguinte metodo:
    import * as nomeEscolhido from "./nomeArquivo.js";
para se usar os metodos e dados basta colocar
    nomeEscolhido.nomeDado.
    ex: nomeEscolhido.default. que retorna a função default da função importada. 
*/

import * as m_cursos from "./cursos"


console.log(m_cursos.cursos)
console.log(m_cursos.default)