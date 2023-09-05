const { getTodos, getLivroId, inserirLivro, alteraLivro, deletaLivro } = require("../services/livroService")

function getLivros(res) {
    try {
        const livros = getTodos()
        res.send(livros)
    } catch (error) {
        throw new Error("Erro ao conectar")
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        const livro = getLivroId(id)
        res.send(livro)
    } catch (error) {
        throw new Error("Erro ao conectar")
    }
}

function postLivro(req, res) {
    try {
        const novoLivro = req.body
        inserirLivro(novoLivro)
        res.send("Livro Inserido!")
        res.status(201)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    res.send("requisição POST")
}

function putLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body
        alteraLivro(body, id)
        res.send("Livro alterado!!!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id
        deletaLivro(id)
        res.send("Deletado com sucesso!")
    }catch(error){
        res.send(error.message)
    }
}


module.exports = {
    getLivros,
    getLivro,
    postLivro,
    putLivro,
    deleteLivro
}