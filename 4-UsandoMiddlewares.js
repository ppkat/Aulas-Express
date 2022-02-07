const express = require('express')
const app = express()

//app.use pode ser usado como função middleware que se ativa por qualquer tipo de requisição HTTP

app.use('/user/:id', (req, res, next) =>{
    res.send('Request URL:' + req.originalUrl) //exibe a URL feita pela requisição do usuário
    next() //passa para a próxima função middleware no ciclo de requisição e resposta
}, (req, res, next) => {
    console.log('Request Type:' + req.method) //exibe em qual método HTTP foi feita a requisição
    next()
})

//O next('route') faz com o que o usuário passe para a próxima rota

app.get('/admin/:id', (req, res, next)=>{
    if(req.params.id == 0) next('route') //passa para a proxima rota criada
    else next() //pasa para a proxima middleware function
}, (req, res, next) =>{
    res.send('Olá, usuário comum')
    //como não há "next()", o ciclo de resposta terminou por aqui, e nenhuma outra middleware function pode ser criada depois desta
})

app.get('admin/:id', (req, res, next)=>{
    res.send('Olá, Admin')
})


//manipulando erros
//para manipular erros, é necessário passar 4 parametros, mesmo que o next não seja usado

app.use('rota/erro', (err, req, res, next)=>{
    res.send('Houve um erro:' + err)
})

//além das funções midlewarwares que podem ser criadas, o próprio express já possui algumas funções de middleware prontas para serem utilizadas como app.static, app.json etc
//E existem as funções de middleware que podem ser adicionadas com frameworks extensões do express

app.listen(4, ()=>{
    console.log('server rodando na porta 4')
})