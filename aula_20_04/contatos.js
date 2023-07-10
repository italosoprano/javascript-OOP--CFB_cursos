import { contatos } from "./bancoContatos"

const contato = {
    getTodosContatos: function() {
        return contatos
    },
    getContato: function(contato_i) {
        return contatos[contato_i]
    },
    addContato: function(novoContato, destinoDom) {
        const cont = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email,
        }
        contatos.push(cont)
        const div = document.createElement("div")
        div.setAttribute("class", ".contato")
        const p_nome = document.createElement("p")
        p_nome.innerHTML = novoContato.nome
        const p_telefone = document.createElement("p")
        p_nome.innerHTML = novoContato.telefone
        const p_email = document.createElement("p")
        p_nome.innerHTML = novoContato.email
        div.appendChild(p_nome)
        div.appendChild(p_telefone)
        div.appendChild(p_email)
        destinoDom.appendChild(div)
    }
}

export default contato