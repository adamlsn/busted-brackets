<<<<<<< HEAD
const { Schema, model, Mongoose } = require('mongoose');
const timestamp = require('../utils/dateFormat');
=======
const { Schema, model } = require('mongoose');
>>>>>>> develop

const bracketSchema = new Schema({
        title: {
            type: String,
            require: true,
            unique: true,
        },
        bracketLevel: {
            type: String,
            require: true,
        },
        creator: {
            type: String,
            require: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp
        },
        seed:  {
            type: Number,
            required: false,
        }, 
<<<<<<< HEAD
        id: {
            type: Number,
            required: true,
            unique: true
        },
=======
>>>>>>> develop
        teams: {
            type: String,
            required: true,
        },
        round: {
            type: Number,
            required: true,
        },
        group: {
            type: Array
        }
},
{
    toJSON: {
        virtuals: true,
    }
}
);

const Bracket = model('Bracket', bracketSchema);

module.exports = Bracket;