// server.js

const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')

app.set('view engine', 'ejs')
app.get('/', async (req, res) => {
  const dogFactsUrl = 'https://dog-api.kinduff.com/api/facts'

  try {
    const response = await axios.get(dogFactsUrl)
    const dogFact = response.data.facts[0]
    // res.send(dogFact)
    res.render("index",{dogFact})
    // render the index.ejs 
    // and pass dogFact
    // res.json(dogFacts)
  } catch (error) {
    console.error('Error fetching cat facts:', error)
    res.status(500).send('Error fetching cat facts')
  }
})

// Define routes and middleware here

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
