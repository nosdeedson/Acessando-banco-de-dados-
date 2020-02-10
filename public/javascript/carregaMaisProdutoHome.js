function maisProdutos(){
    const botao = document.getElementById('botao')
    const divP = document.getElementById('maisProdutos')
    
    botao.onclick = ()=>{
        
        divP.id='tereirosProdutos'
        
        /*setaDireita */

        const setaDir = document.createElement('img')
        setaDir.classList.add("setaRight")
        setaDir.src="/images/setaDireita.png"

        /* seciton */
        const section = document.createElement('section')
        section.classList.add("produto1")
        /*dentro da section */
        for( let i = 0; i < 5 ; i++){
            const nomeDiv = document.createElement('div')
            nomeDiv.classList.add('p1')
            /*dentro da nomeDiv */
            const imgProduct = document.createElement('img')
            imgProduct.src="/images/exemploImagem.png"

            const aLink = document.createElement('a')
            aLink.setAttribute("id",'testelink')
            aLink.onclick="paginaProduto()"
            aLink.href="/layouts/paginaProduto.html"
            aLink.appendChild(imgProduct)

            nomeDiv.appendChild(aLink)

            const h2Nome = document.createElement('h2')
            h2Nome.textContent="Camiseta BaWSaw"
           
            nomeDiv.appendChild(h2Nome)

            const h2Preco = document.createElement('h2')
            h2Preco.innerHTML='R$ 50,00'

            nomeDiv.appendChild(h2Preco)
            /** */
            section.appendChild(nomeDiv)
        }

        
        /*setaEsquerda */

        const setaEsq = document.createElement('img')
        setaEsq.classList.add("setaLeft")
        setaEsq.src="/images/setaEsquerda.png"


        /*elementos da div terceiros produtos */
        divP.appendChild(setaDir)
        divP.appendChild(section)
        divP.appendChild(setaEsq)
 
        botao.style.display = "none"
    }
}