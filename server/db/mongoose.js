var mongoose = require('mongoose');

mongoose.Promose = global.Promise;
// local database connection
mongoose.connect('mongodb://localhost:27017/TodoApp',  {useNewUrlParser: true});
//mLab.com database connection
//mongoose.connect('mongodb://karlrasmussen:mkarl0907@ds229552.mlab.com:29552/nodejsclass', {useNewUrlParser: true});
module.exports = {mongoose};
