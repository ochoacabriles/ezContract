var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');

var indexRouter = require('./routes/index');
var eztokenRouter = require('./routes/eztoken')
var ezicoBasicRouter = require('./routes/ezicoBasic')
var ezicoMintedRouter = require('./routes/ezicoMinted')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(favicon(path.join(__dirname, 'public', 'Favicon.ico')))

app.use('/', indexRouter);
app.use('/eztoken', eztokenRouter);
app.use('/ezicoBasic', ezicoBasicRouter);
app.use('/ezicoMinted', ezicoMintedRouter);

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
