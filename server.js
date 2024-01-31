// server.js

const express = require("express")
const app = express()
const port = 3000
const path = require("path")

// const indexRouter = require("./routes/index")
const catsRouter = require("./routes/cats")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use("/cats", catsRouter)

// app.get("/cats")

app.get("/", (req, res) => {})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

module.exports = app
