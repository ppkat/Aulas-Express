const express = require("express")
const app  = express()

// express já vem com um manipulador de erros padrão, então não é necessário criar um

app.get('/', function (req, res) {
    throw new Error('BROKEN') // Express will catch this on its own.
  })

app.listen(7, ()=>{
    console.log('servidor rodando na porta 7')
})