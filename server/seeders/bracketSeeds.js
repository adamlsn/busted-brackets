const Bracket = require('../models/Bracket');
const mongoose = require('mongoose');

const testbracket = new Bracket({
    title: "Test",
    creator: "Test",
    createdAt: Date.now(),
    username: "test",
    seed: 1,
    id: 1,
    teams: [
        "TestTeamOne",
        "TestTeamTwo"
    ],
    round: 1,
    group: 1
});