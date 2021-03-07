const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'username is missing']
    },
    password: {
        type: String,
        required: [true, 'password is missing']
    }

})

const User = mongoose.model('user', userSchema);
module.exports = User;