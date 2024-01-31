const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

const pokemonRouter = require('./routes/pokemons')
app.use('/', pokemonRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
