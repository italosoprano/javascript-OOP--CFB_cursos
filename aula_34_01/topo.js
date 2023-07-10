/*
criando um header reutilizavel em outras páginas.
cria-se duas variaveis e se atribuem para o head e o body.
cria-se uma variavel com link para o css do topo e atribui-se ao head do documento html.

*/

const head = document.head
const body = document.body

let estiloTopo = "display: flex;"+
"justify-content: space-between;" +
"align-items: center;" +
"background-color: #00f;"+
"color: white;"

const topo = document.createElement("div") //criar elemento div do topo
topo.setAttribute("id", "topo") //setar atributo id="topo"
topo.setAttribute("style", estiloTopo) //setar atributo class="topo"
body.prepend(topo) //prepend adiciona um elemento no inicio do body

const logo = 
    "<div id='logo' class='logo'>" +
        "<p> imagem que seria o logo</p>" +
    "</div>"
/*
    "<div id="logo" class="logo">" +
        "<img src="nomeImagem.jpg" title="descriçãoImagem"/>" +
    "</div>"
*/

topo.innerHTML += logo

const login = 
    "<div id='login' class='login'>" +
        "<p id='nome' class='nome' >Nome: <span class='nomeSpan'>Fulano de tal</span></p>" +
        "<p id='matricula' class='matricula'>Matricula: <span class='matriculaSpan'>000000-00</span></p>" +
    "</div>"

topo.innerHTML += login