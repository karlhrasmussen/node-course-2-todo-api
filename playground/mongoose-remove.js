const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5c2e967b6410b2bf2f0edc64'}).then((todo) => {
    console.log(todo);  
})

//Todo.findOneAndRemove
Todo.findByIdAndRemove('5c2e967b6410b2bf2f0edc64').then((todo) => {
    console.log(todo);
});