const { Schema } = require('mongoose');

const bracketSchema = new Schema({
    title: [
        {
            type: String,
        },
    ],
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
        }, 
        group: {
            type: Integer,
            required: true,
        }
    
,
}, 
{
    toJSON: {
        virtuals: true,
    }
}
);

module.exports = bracketSchema;