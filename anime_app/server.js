// server.js
const express = require('express')
const app = express()
const port = 3000

const apiRouter = require('./routes/apiRouter')
const { fetchDuckPic } = require('./controllers/apiController')

app.set('view engine', 'ejs')

app.use('/api', apiRouter)

app.get('/', async (req, res) => {
  try {
    const duckPic = await fetchDuckPic()
    res.render('index', { duckPic })
  } catch (error) {
    console.error('Error fetching duck pics:', error)
    res.status(500).send('Error fetching duck pics')
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
