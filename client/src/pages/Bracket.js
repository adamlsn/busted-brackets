import { useState } from "react";

import { Bracket } from "react-brackets";

function Generator(props) {
  const [numberOfTeams, setNumberOfTeams] = useState(0);

  {
    /*const style = {
    text: {
      width: "40%",
      margin: "auto",
      fontSize: "22px",
    },
  };
  const fakeDbStuff = [
    { name: "Bucks" },
    { name: "Cavs" },
    { name: "Bulls" },
    { name: "Pacers" },
  ];
  const roundsWithDBData = [
    {
      title: "round One",
      seeds: [],
    },
  ];
  for (let i = 0; i < fakeDbStuff.length; i += 2) {
    const roundData = {
      id: i,
      date: new Date().toDateString(),
      teams: [{ name: fakeDbStuff[i].name }, { name: fakeDbStuff[i + 1].name }],
    };
    roundsWithDBData[0].seeds.push(roundData);
  }
  console.log("ROunds with data!!", roundsWithDBData);
  const rounds = [
    {
      title: "Round one",
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team B" }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: "Team C" }, { name: "Team D" }],
        },
      ],
    },
    {
      title: "Round one",
      seeds: [
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team C" }],
        },
      ],
    },
  ];*/
  }

  let makeRounds = () => {
    let numberOfRounds = Math.cbrt(numberOfTeams) + 1;

    let rounds = [];

    for (let i = 0; i < numberOfRounds; i++) {
      let round = {
        title: `Round ${i + 1}`,
        seeds: [],
      };

      let numberOfTeamsInRound = numberOfTeams / Math.pow(2, i + 1);

      for (let j = 0; j < numberOfTeamsInRound; j++) {
        let seed = {
          id: i * numberOfTeams + j,

          teams: [{ name: "" }, { name: "" }],
        };

        round.seeds.push(seed);
      }

      rounds.push(round);
    }

    return rounds;
  };

  console.log(makeRounds());

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="pageHeader">Bracket Generator Page</h2>
      <select
        onChange={(e) => {
          if (!isNaN(e.target.value)) {
            setNumberOfTeams(parseInt(e.target.value));
          } else {
            console.log("Not a number!");
          }
        }}
      >
        <option>Please select the number of teams</option>
        <option>2</option>
        <option>4</option>
        <option>8</option>
        <option>16</option>
        <option>32</option>
        <option>64</option>
      </select>
      <Bracket rounds={makeRounds()} />
    </div>
  );
}

export default Generator;