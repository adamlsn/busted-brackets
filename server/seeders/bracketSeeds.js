const faker = require('faker');

const db = require('../config/connection');
const { Bracket } = require('../models');

db.once('open', async () => {
  await Bracket.deleteMany({});

  // create user data
  const bracketData = [];
  

  for (let i = 0; i < 5; i += 1) {
    const group = [];

    const creator = faker.internet.userName();
    const title = faker.random.word();
    const bracketLevel = 'Master';
    const createdAt = faker.date.recent();
    const seed = 1;
    const id = 2;
    const teams = faker.company.companyName();
    const round = 3;
    const teamOne = faker.commerce.productName();
    const teamTwo = faker.commerce.productName();
    group.push(teamOne, teamTwo)

    console.log(teamOne, teamTwo)

    bracketData.push({ creator, title, bracketLevel, createdAt, seed, id, teams, round, group });
  }

  const createdBracket = await Bracket.collection.insertMany(bracketData);

  console.log('all done!');
  process.exit(0);
});