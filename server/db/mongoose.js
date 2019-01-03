var mongoose = require('mongoose');

mongoose.Promose = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp',  {useNewUrlParser: true});
mongoose.connect('mongodb://karlrasmussen:mkarl0907@ds229552.mlab.com:29552/nodejsclass', {useNewUrlParser: true});
module.exports = {mongoose};