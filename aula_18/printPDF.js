const btn_imprimir = document.querySelector("#btn_imprimir")

btn_imprimir.addEventListener("click", (evt) => {
    // se utilizarmos apenas window.print() ele ira realizar uma impressao de um print tirado da tela.

    const conteudo = document.querySelector("#tabela").innerHTML
    //conteudo da tabela que desejamos imprimir.

    let estilo = "<style>";
    estilo += "table {width: 100%; font: 25px Calibri;}";
    estilo += "table, th, td {border: solid 2px #888; boder-collapse: collapse; padding: 4px 8px; text-align: center;}";
    estilo += "</style>";
    //criando uma variavel e adicionando a ela o estilo para a impressão do documento.

    const win = window.open('', '', 'height=700, width=700');
    //
    
    win.document.write('<html><head>')
    win.document.write('<title>CFB Cursos</title>')
    win.document.write(estilo)
    win.document.write('</head>')
    win.document.write('<body>')
    win.document.write(conteudo)
    win.document.write('</body>')
    win.document.write('</html>')
    //document.write serve para que você possa escrever no documento. No caso estamos escrevendo um cabeçalho, e um body de uma pagina html. 

    win.print()
    //comando para imprimir o documento, agora pronto e formatado.
    win.close()
    // para fechar a janela de impressao. 
})