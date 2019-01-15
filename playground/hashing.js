const {SHA256} = require('crypto-js');
const  jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'password3';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log('hash', hash);
    })
});

var hashedPassword = '$2a$10$ycxV/3sNP6XUu.4Hf084bOJrbfzG3OSGyHh103yQ7RBS95N135FwC';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log('password: ', password);
    console.log(res);
})

