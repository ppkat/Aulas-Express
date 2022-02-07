//moddlewars functions são funções que tem acesso ao objeto de requisição (req), o objeto de resposta (res) e à proxima funçao do ciclo de requisição e resposta.

const express = require('express')
const app = express()

// Sempre que o usuário faz uma requisição por http, o express passar o objeto req e res que pode ser maniopulado por aqui

function reconheceRequisicao(req, res, next){
    console.log('requisição passando')
    next() // passa para a proxima função do ciclo de requisição e resposta. Se o next não for usado, as proximas funções que dependem da requisição não vão funcionar
}

// o app.use() faz com que a minha função seja chamada como uma middleware function (recebendo os objetos requisição e resposta como parametros),
// que será executada antes da rota get APENAS se tiver sido carregada antes

app.use(reconheceRequisicao)

app.get('/', (req, res) => {
    res.send('pagina inicial')
})

app.listen(3)