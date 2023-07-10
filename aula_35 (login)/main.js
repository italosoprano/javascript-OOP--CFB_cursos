/*
arquivo js principal.
*/

//importação do modulo para utilizar.
import { Login } from "./login.js";
import { Cxmsg } from "../aula_34_01/caixa.js"

const callback_ok = () => {
    
}
const callback_naook = () => {
    const config = {
        cor: "#800"
    }
    Cxmsg.mostrar(config, "ERRO", "Login não efetuado. Usuário ou senha incorretos.")
}

Login.login(callback_ok, callback_naook);