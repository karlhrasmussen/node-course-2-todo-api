const {SHA256} = require('crypto-js');
const  jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'password1';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log('hash', hash);
    })
});

var hashedPassword = '$2a$10$oFX.qmbgfxr4gNBWJYypzOi9Axqc9C8ummmeTzKYIBm2kF9SdOrhq';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
})

