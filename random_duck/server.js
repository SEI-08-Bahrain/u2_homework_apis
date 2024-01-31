// server.js

const express = require("express")
const path = require("path")
const app = express()
const port = 3000
const indexRouter = require("./routes/index")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use("/", indexRouter)
app.use(express.static(path.join(__dirname, "public")))
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
