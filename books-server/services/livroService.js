const fs = require("fs")

function getTodos(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter(livro => livro.id === id )

    return livroFiltrado
}

function inserirLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaLista = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaLista))
    console.log(fs.readFileSync("livros.json"))
}

function alteraLivro(modifica, id){
    let livros = JSON.parse(fs.readFileSync("livros.json"))
    const indiceAlterado = livros.findIndex(livro => livro.id === id)

    const conteudo = { ...livros[indiceAlterado], ...modifica }

    livros[indiceAlterado] = conteudo

    fs.writeFileSync("livros.json", JSON.stringify(livros))
}

function deletaLivro(id){
    let livros = JSON.parse(fs.readFileSync("livros.json"))
    const indiceDeletado = livros.findIndex(livro => livro.id === id)
    
    livros.splice(indiceDeletado, 1)

    fs.writeFileSync("livros.json", JSON.stringify(livros))
}

module.exports = {
    getTodos,
    getLivroId,
    inserirLivro,
    alteraLivro,
    deletaLivro
}