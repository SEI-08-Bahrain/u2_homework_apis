const express = require("express")

const axios = require("axios")
const app = express()
let foodRouter = require("./routes/route")
const port = 3000
app.set("view engine", "ejs")
app.use("/", foodRouter)
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
