const bodyParser = require('body-parser');
const morgan =  require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const usersRoutes = require('./routes/user');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/reserva', {
  useMongoClient: true
}).then(db => console.log('db is connected'))
  .catch(err => console.log(err));

//settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
  app.use('/user', usersRoutes);

//static files

//error handlers

//start server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
