const express = require("express")
const app = express()
const port = 3000
const axios = require("axios")

app.set("view engine", "ejs")

// Inside server.js

app.get("/", async (req, res) => {
  const dogFactsUrl = "https://dogapi.dog/api/v2/facts" 

  try {
    const response = await axios.get(dogFactsUrl) 
    const dogFacts = response.data.data 
    
    res.render("index", { dogFacts }) 
  } catch (error) {
    console.error("Error fetching dog facts:", error)

    res.status(500).send("Error fetching dog facts")
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
