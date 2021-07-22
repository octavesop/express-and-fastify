const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const BOOKS_DATA = require("./data.json");
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.get("/", async (req, res, next) => {
  res.send({success: true});
});

app.get("/books", async (req, res, next) => {
  res.send(BOOKS_DATA);
});

app.get("/books/1", async (req, res, next) => {
  res.send(BOOKS_DATA[0]);
});

app.get("/books/0", async (req, res, next) => {
  res.send(undefined);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createErsor(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
