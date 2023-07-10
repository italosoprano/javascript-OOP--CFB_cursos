/*
criação da tela de login a partir de modulos

*/

class Login {
    static mat = null;
    static pas = null;
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static estilocss = null;
    static callback_ok = null
    static callback_naook = null
    static config = {
        cor: "048",
        img: "img/mochi.jpeg"
    }
    static endpoint = "https://loginv1.cfbcursos.repl.co/";
    //https://loginv1.italosoprano.repl.co/

    static login = (callback_ok, callback_naook,config=null) =>{
        this.logado = false;
        this.matlogado = null;
        this.nomelogado = null;
        this.acessologado = null;
        if(config != null){
            this.config = config
        }
        this.callback_ok = () => {}
        this.callback_naook = () => {}
        this.estilocss = ".fundologin{ display: flex; justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.75);box-sizing: border-box;}"+
        ".baselogin{display: flex;justify-content: center;align-items: stretch;width: 50%;box-sizing: inherit;}"+
        ".elementoslogin{display: flex;justify-content: center;align-items: flex-start;width: 50%;background-color: #eee;flex-direction: column;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}"+
        ".logologin{display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;padding: 10px;border-radius:  0px 10px 10px 0px ;box-sizing: inherit;}"+
        ".logologin img {width: 100%;}"+
        ".campologin{display: flex;justify-content: flex-start;align-items:flex-start;flex-direction: column;box-sizing: inherit;margin-bottom: 10px; width: 100%}"+
        ".campologin label {font-size: 18px;}"+
        ".campologin input {font-size: 18px;padding: 5px;background-color: #fff;border-radius: 5px; width: 100%}"+
        ".botoeslogin{display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: inherit;}"+
        ".botoeslogin button{cursor: pointer;background-color: #008;color: #fff;border-radius: 5px;padding: 10px 20px;width: 100px;box-sizing: inherit;}"

        const styleEstilo = document.createElement("style");
        styleEstilo.setAttribute("id", "id_estiloLogin");
        styleEstilo.setAttribute("rel", "stylesheet");
        styleEstilo.setAttribute("type", "text/css");
        styleEstilo.innerHTML = this.estilocss
        document.head.appendChild(styleEstilo)

        //body > fundologin
        const fundologin = document.createElement("div");
        fundologin.setAttribute("id", "fundologin");
        fundologin.setAttribute("class", "fundologin");
        document.body.prepend(fundologin);

        //fundologin baselogin
        const baselogin = document.createElement("div");
        baselogin.setAttribute("id", "baselogin");
        baselogin.setAttribute("class", "baselogin");
        fundologin.appendChild(baselogin);
        
        //baselogin > elementoslogin
        const elementoslogin = document.createElement("div");
        elementoslogin.setAttribute("id", "elementoslogin");
        elementoslogin.setAttribute("class", "elementoslogin");
        baselogin.appendChild(elementoslogin);

        //elementoslogin > campologin01
        const campologin01 = document.createElement("div");
        campologin01.setAttribute("id", "campologin");
        campologin01.setAttribute("class", "campologin");
        elementoslogin.appendChild(campologin01);

        //campologin01 > labelUsername
        const labelUsername = document.createElement("label");
        labelUsername.innerHTML = "Username :";
        campologin01.appendChild(labelUsername);

        //campologin01 > inputUsername
        const inputUsername = document.createElement("input");
        inputUsername.setAttribute("type", "text")
        inputUsername.setAttribute("name", "f_username");
        inputUsername.setAttribute("id", "f_username");
        campologin01.appendChild(inputUsername);

        //elementoslogin > campologin02
        const campologin02 = document.createElement("div");
        campologin02.setAttribute("id", "campologin");
        campologin02.setAttribute("class", "campologin");
        elementoslogin.appendChild(campologin02);

        //campologin02 > labelPassword
        const labelPassword = document.createElement("label");
        labelPassword.innerHTML = "Password :";
        campologin02.appendChild(labelPassword);

        //campologin02 > inputPassword
        const inputPassword = document.createElement("input");
        inputPassword.setAttribute("type", "text")
        inputPassword.setAttribute("name", "f_senha");
        inputPassword.setAttribute("id", "f_senha");
        campologin02.appendChild(inputPassword);

        //elementoslogin > botoeslogin
        const botoeslogin = document.createElement("div");
        botoeslogin.setAttribute("class", "botoeslogin")
        elementoslogin.appendChild(botoeslogin)

        //botoeslogin > btn_login
        const btn_login = document.createElement("button")
        btn_login.setAttribute("id", "btn_login")
        btn_login.innerHTML = "Login"
        btn_login.addEventListener("click", (evt) => {
            this.verificaLog()
        })
        botoeslogin.appendChild(btn_login)

        //botoeslogin > btn_cancelar
        const btn_cancelar = document.createElement("button")
        btn_cancelar.setAttribute("id", "btn_cancelar")
        btn_cancelar.innerHTML = "Cancelar"
        btn_cancelar.addEventListener("click", (evt) => {
            this.logado = false;
            this.matlogado = null;
            this.nomelogado = null;
            this.acessologado = null;
            this.fechar();
        })
        botoeslogin.appendChild(btn_cancelar)

        //corpologin > logologin
        const logologin = document.createElement("div")
        logologin.setAttribute("id", "logologin")
        logologin.setAttribute("class", "logologin")
        baselogin.appendChild(logologin)

        //logologin > img
        const logologinimg = document.createElement("img")
        logologinimg.setAttribute("src", "img/mochi.jpeg")
        logologinimg.setAttribute("alt", "logo da página")
        logologin.appendChild(logologinimg)

    }

    static verificaLog = () => {
        let mat = document.querySelector("f_username").value
        let pas = document.querySelector("f_senha").value

        const endpoint = `https://loginv1.cfbcursos.repl.co/?matricula=${mat}&senha=${pas}`;

        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado = true;
                this.matlogado = mat;
                this.nomelogado = res.nome;
                this.acessologado = res.acesso;
                this.callback_ok();
                this.fechar();
            } else {
                this.logado = false;
                this.matlogado = null;
                this.nomelogado = null;
                this.acessologado = null;
                this.callback_naook();
            }
        })

        /*
        if (mat == "123" && pas == "321"){
            return true
        } else {
            return false
        }
        */ 
    }   
    
    static fechar = () => {
        const fundologin = document.querySelector("#fundologin")
        fundologin.remove();
        const id_estiloLogin = document.querySelector("#id_estiloLogin")
        id_estiloLogin.remove();
    }
}
