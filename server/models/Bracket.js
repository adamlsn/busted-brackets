const { Schema, model } = require("mongoose");

const bracketSchema = new Schema(
  {
    creator: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    seed: {
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
      type: Array,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Bracket = model("Bracket", bracketSchema);

module.exports = Bracket;
