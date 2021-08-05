const { Schema, model, Mongoose } = require('mongoose');
const timestamp = require('../utils/dateFormat');

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