const express = require('express')

const app = express()

const handlebars = require('express-handlebars')

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('views engine', 'handlebars')
app.use(express.static('public')) // esta linha faz com que seja possível acessar os 
// itens staticos do projeto como imagens e css

//rotas 
app.get('/', (req, res, next)=>{
    res.send("pagina inicial")
})

app.get('/inicial', (req, res)=>{
    res.render(__dirname +'/views/inicial.handlebars')
})

app.listen(3000, (erro)=>{
    if(erro)
        console.log("acesso negado" + erro)
    else
        console.log('Servidor rodando')
})