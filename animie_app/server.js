const express = require('express')
const app = express()
const PORT = 3000

const axios = require('axios')

app.set('view engine', 'ejs')
var indexRouter = require('./routes/index')

// Define routes and middleware here
app.use('/', indexRouter)


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})
