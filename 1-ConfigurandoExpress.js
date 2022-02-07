const express = require('express') // importando o express
const app = express() //variavel que recebe a classe "express()".
//Esta classe possui todos os valores de métodos HTTP (get, post, delete, update)

const port = 1 //recomendável definir uma váriavel para a porta
app.listen(port, ()=> {
    console.log('servidor rodando na porta: ' + String(port))
}) //método que abre o servidor. Primeiro parametro é a porta e o segundo chama uma função de callback