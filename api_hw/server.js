const express = require('express')
const axios = require('axios');
var indexRouter = require('./routes/index')
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use('/', indexRouter)

app.listen(PORT, ()=> {
  console.log(`server is running at port: ${PORT}`)
})