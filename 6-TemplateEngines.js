const express = require("express")
const { create } = require("express-handlebars") //exportando o metodo de condiguração do handlebars
const app  = express()
const hbs = create({
    extname: "hbs",
    defaultLayout: "main-layout",
    layoutsDir: "views/layouts/"
}) //configuração do handlebars

//Template engines nos permitem usar templates de HTML no app. Eles também podem substituir variaveis no arquivo de template (HTML) por seus valores reais
// e tornar mais fácil a respota de HTML para o cliente

//Os arquivos de templates são colocados na pasta ./views
app.set('views', './views') //seta o diretório de onde ficaram os templates

//Para definir a template engine para que o express possa reconhece-la como engine é necessário usar o app.engine()
app.engine('handlebars', hbs.engine)

//Para setar a sua template engine no express se utiliza o app.set('view engine', '${sua template engine}')
app.set('view engine', 'handlebars') //setando para a express-handlebars template engine. Automáticamente importa o modulo da template engine
//obs: é necessário instalar a template engine do npm

//apos setar a template engine, só é preciso criar um index.{template engine} que tenha a estrutura do template HTML e é só colocar pra funcionar em uma rota
app.get('/', (req, res)=>{
    res.render('homePage', {titulo: 'home page', conteudo: 'bem vindo a home page'}) //O segundo paramentro são as váriaveis que passei para o template
})

app.listen(6, ()=>{
    console.log('servidor rodando na porta 6')
})