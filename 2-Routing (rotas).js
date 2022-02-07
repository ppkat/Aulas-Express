const express = require('express')
const app = express()

//Uma rota do express pode receber mais de uma função de callback com um array de funções ou então uma seguida da outra nos parametros.

//Para isso é necessário colocar o terceiro parametro na função de callback (next) e escreve-lo no final das funções para dizer que há outra função de callback. Ex:

app.get('/', (req, res, next) => {
	//conteudo da função de callback
	next() // passa para a proxima função de callback
}, (req, res) => {
	//função de callback 2
})

// a interrogação (?) em uma rota faz com que o conteúdo (a caractere ou o parenteses que vem antes) possa ser escrito ou não na URL
//ex

app.get('/es(ta)?do', (req, res) => {
	res.send('tanto de ele digitar "estado" ou "esdo" essa mensagem aparecerá')
})

// o asterisco (*) substitui um termo qualquer na rota

app.get('/doide*ra', (req, res) => {
	res.send('esse calback funcina tanto na rota "doidera" quanto na "doideusura" e na "doideUJSDUDJASXFBUSDFGBUSDra" e na "doideXera"')
})

// o mais (+) faz com que aquele conteúdo possa ser escrito quantas vezes quiser

app.get('/pe+dro+', (req, res) => {
	res.send('vai funcionar tanto com "pedro" ou com "peeeeeeeeeeeeedro" ou "pedroooooooooo" ou "peeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedrooooooo"')
})

// colocar uma barra mais faz com que a rota seja acessada com qualquer palavra que tenha aquela expressão no meio

app.get('/ad/', (req, res) => {
	res.send('isso funfa como "adoro" ou "adc" ou "RANDOMadRANDOM"')
})

//parametros podem ser passado com um ":" depois da rota

app.get('/users/:userid/idades/:idade', (req, res) => {
	res.send(`seu id é: ${req.params.userid}e sua idade é: ${req.params.idade}`) //so escrevi dql jeito q vc aprendeu no python
})

//metodos de resposta:
res.send() //Send a response of various types.
res.sendFile() //Set the response status code and send its string representation as the response body.
res.sendStatus() //Set the response status code and send its string representation as the response body.
res.render() //Render a view template.
res.redirect() //Redirect a request.
res.jsonp() //Send a JSON response with JSONP support.
res.json() //Send a JSON response.
res.end() //End the response process.
res.download() //Prompt a file to be downloaded.

//app.route() pode fazer dar diferentes respostas para resquisições de uma mesma rotas com protocolos HTTPs diferentes:

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

  // o express.router() cria uma rota modular, em que você transforma uma rota "/", comum, em uma rota com o nome do modulo em que está a rota

var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router

app.listen(2, ()=>{
  console.log('servidor rodando na porta 2')
})

