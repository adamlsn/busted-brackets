import { useState } from "react";

import { Bracket } from "react-brackets";

function Generator(props) {
  const [numberOfTeams, setNumberOfTeams] = useState(0);

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
