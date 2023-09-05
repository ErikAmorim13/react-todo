const express = require("express")
const rotaLivro = require("./routes/livros")

const app = express()
app.use(express.json())

app.use("/livros", rotaLivro)

const port = 8000

app.listen(port, () => {  
    console.log(`Server is running at port ${port}`)
})  