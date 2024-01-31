var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const axios = require('axios');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const numberOfImages = 3; // Set the desired number of images

    // Array to store multiple anime facts
    const animePatsArray = [];

    for (let i = 0; i < numberOfImages; i++) {
      const response = await axios.get('https://api.waifu.pics/sfw/pat');
      const animePat = response.data;

      animePatsArray.push(animePat);
    }

    console.log('Anime Pats Array:', animePatsArray);

    res.render('index', { animePatsArray });
  } catch (error) {
    console.error('Error fetching anime facts:', error.response.data);
    res.status(500).send('Error fetching anime facts');
  }
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
