function carrinhoAcao(){
    const carriho = document.getElementById('acaoCarrinho')
    const conteudo = document.getElementById('produtos')
    carriho.onclick = (evento) =>{
        evento.preventDefault()
        fetch(carriho.href)
            .then( resposta => resposta.text())
            .then( html => conteudo.innerHTML =  html)
    }
}
