var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var uuid = require('node-uuid');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var DATA = false;

if (process.argv.slice(2)[0] == "data") {
  console.log("Showing Data");
  DATA = true;
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// if (DATA) {
//   app.use(logger('DATA: :method :url :status :res[content-length] Request-Time: :response-time ms'));
// } else {
//   app.use(logger('DATA: :method :status'));
// }


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});




// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;