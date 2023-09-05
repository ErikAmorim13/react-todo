const { Router } = require("express")
const { getLivros, getLivro, postLivro, putLivro, deleteLivro } = require("../controller/livroController")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.put('/:id', putLivro)

router.delete('/:id', deleteLivro)

module.exports = router