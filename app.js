// packages

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const expressHbs = require('express-handlebars');
const methodOverride = require('method-override')

const mongoose = require('mongoose');

require ('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);



const routes = require('./routes/index');
const wigRoute= require('./routes/wigs');
const userRoute= require('./routes/user');

const app = express();
//connecting mongoose
mongoose.connect('mongodb://localhost/theUnit')
  .then(() => {
    console.log('connected')

  })
  .catch((err) => {
    console.log('ERROR', err)
  })

 
// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');
// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//homepage
app.use('/', routes);
// wig route page
app.use('/store/wigs', wigRoute)
// user route
app.use('/store/user', userRoute)
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
