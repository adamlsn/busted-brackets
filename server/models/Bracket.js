const { Schema } = require('mongoose');

const bracketSchema = new Schema({
    title: [
        {
            type: String,
        },
    ],
        createdAt: {
            type: Date,
            default: Date.now
        },
        seed:  {
            type: Integer,
            required: false,
        }, 
        id: {
            type: Integer,
            required: true,
        },
        teams: {
            type: String,
            required: true,
        },
        round: {
            type: Integer,
            required: true,
        }
    
});

module.exports = bracketSchema;