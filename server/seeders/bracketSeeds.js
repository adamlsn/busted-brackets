const faker = require('faker');

const db = require('../config/connection');
const { Bracket } = require('../models');

db.once('open', async () => {
  await Bracket.deleteMany({});

  // create user data
  const bracketData = [];
  const teamsArr = [
    "Arizona Cardinals",
    "Atlanta Falcons",
    "Buffalo Bills",
    "Baltimore Ravens",
    "Carolina Panthers",
    "Cincinnati Bengals",
    "Cleveland Browns",
    "Chicago Bears",
    "Dallas Cowboys",
    "Denver Broncos",
    "Detroit Lions",
    "Green Bay Packers",
    "Houston Texans",
    "Indianapolis Colts",
    "Kansas City Chiefs",
    "Los Angeles Chargers",
    "Los Angeles Rams",
    "Jacksonville Jaguars",
    "Miami Dolphins",
    "Minnesota Vikings",
    "New England Patriots",
    "New Orleans Saints",
    "New York Giants",
    "New York Jets",
    "Oakland Raiders",
    "Philadelphia Eagles",
    "San Francisco 49ers",
    "Seattle Seahawks",
    "Pittsburgh Steelers",
    "Tampa Bay Buccaneers",
    "Tennessee Titans",
    "Washington Redskins"
  ]

  for (let i = 0; i < 5; i += 1) {
    const group = [];

    const creator = faker.internet.userName();
    const title = faker.random.word();
    const bracketLevel = 'Master';
    const createdAt = faker.date.recent();
    const seed = 1;
    const id = 2;
    const teams = teamsArr;
    const round = 3;
    const teamOne = faker.commerce.productName();
    const teamTwo = faker.commerce.productName();
    group.push(teamOne, teamTwo)

    bracketData.push({ creator, title, bracketLevel, createdAt, seed, id, teams, round, group });
  }

  const createdBracket = await Bracket.collection.insertMany(bracketData);

  console.log('all done!');
  process.exit(0);
});