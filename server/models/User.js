const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use valid email'],
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        toJSON: {
            virtuals: false,
        },
    }
)

const User = model('User', userSchema);

module.exports = User;