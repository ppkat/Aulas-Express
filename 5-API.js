//express API são as varias propriedades dos objetos de requisição e resposta
//Essas propriedades podem ser alteradas

const express = require("express")
const app  = express()

app.response.send = function(host, mensagem){
    //modificando o metodo da forma que eu quiser
    return this.host + ' ' + this.mensagem;
}

app.listen(5, ()=>{
    console.log('servidor rodando na porta 5')
})