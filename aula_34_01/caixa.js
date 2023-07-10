/*
criando uma caixa de alerta personalizado em js


*/

class Cxmsg{
    static cor = null
    static destino = null
    static divmsg = null

    static config = (config) => {
        this.cor = config.cor
    }
    mostrar = (titulo, texto) => {
        this.destino = document.body
        this.titulo = titulo
        this.texto = texto
        
        this.divmsg = document.createElement("div")
        const estilo_divmsg = 
        "display: flex;"+
        "justify-content: center;"+
        "align-items: center;"+
        "position: absolute;" 
        "top: 0px;" 
        "left: 0px;" 
        "width: 100%;" 
        "height: 100vh;" 
        "background-color: rgba(0, 0, 0, 0.7);"+
        "z-index: 999999999999"
        this.divmsg.setAttribute("id", "divmsg")
        this.divmsg.setAttribute("style", estilo_divmsg)
        this.destino.prepend(this.divmsg)

        const estilo_areaCxmsg = 
        "display: flex;"+
        "Justify-content: flex-start;"+
        "align-items: flex-start;"+
        "flex-directio: column;"+
        "width: 300px;"
        const areaCxmsg = document.createElement("div")
        areaCxmsg.setAttribute("style", estilo_areaCxmsg)
        this.divmsg.appendChild(areaCxmsg)

        const estilo_tituloCxmsg = 
        "display: flex;"+
        "Justify-content: flex-start;"+
        "align-items: center;"+
        "width: 100%;"+
        "background-color:"+this.color+";"+
        "color: #fff;"+
        "padding: 5px;"+
        "border-radius: 5px 5px 0px 0px;"

        const tituloCxmsg = document.createElement("div")
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg)
        tituloCxmsg.innerHTML = this.titulo
        areaCxmsg.appendChild(tituloCxmsg)

        const estilo_corpoCxmsg = 
        "display: flex;"+
        "Justify-content: flex-start;"+
        "align-items: center;"+
        "width: 100%;"+
        "background-color: #eee;"+
        "color: #000;"+
        "padding: 30px 5px;"

        const corpoCxmsg = document.createElement("div")
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg)
        corpoCxmsg.innerHTML = this.texto
        areaCxmsg.appendChild(corpoCxmsg)

        const estilo_rodaPeCxmsg = 
        "display: flex;"+
        "Justify-content: space-around;"+
        "align-items: center;"+
        "width: 100%;"+
        "background-color: #ccc;"+
        "color: #000;"+
        "padding: 5px;"+
        "border-radius: 0px 0px 5px 5px;"
        
        const rodaPeCxmsg = document.createElement("div")
        rodaPeCxmsg.setAttribute("style", estilo_rodaPeCxmsg)
        rodaPeCxmsg.innerHTML = this.texto
        areaCxmsg.appendChild(rodaPeCxmsg)

        const estilo_botaoCxmsg = 
        "background-color:" + this.color + ";"+
        "color: #fff;"+
        "padding: 10 px 50px;"+
        "border-radius: 5px;"+
        "cursor: pointer;"+
        "text-transform: uppercase;"

        const btn_ok = document.createElement("button")
        btn_ok.setAttribute("style", estilo_botaoCxmsg)
        btn_ok.innerHTML = "OK"
        btn_ok.addEventListener("click", (evt) => {
            this.ocultar()
        })
        rodaPeCxmsg.appendChild(btn_ok)
        
    }
    ocultar = () => {
        this.Cxmsg.remove()
    }
}

export {Cxmsg}