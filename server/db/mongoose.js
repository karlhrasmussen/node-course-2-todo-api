var mongoose = require('mongoose');

mongoose.Promose = global.Promise;

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://karlrasmussen:mkarl0907@ds229552.mlab.com:29552/nodejsclass'
  };
mongoose.connect( process.env.PORT ? db.mlab : db.localhost,  {useNewUrlParser: true}); 

module.exports = {mongoose};
