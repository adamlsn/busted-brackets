import { useState } from "react";

import { Bracket } from "react-brackets";
import { useMutation } from "@apollo/client";
import { CREATE_BRACKET } from "../utils/mutations";

import "./brackets.css";

function Generator(props) {
  const [numberOfTeams, setNumberOfTeams] = useState(0);
  const [createBracket, { error }] = useMutation(CREATE_BRACKET);
  const [teamsArray, setTeamsArray] = useState([]);

  let updateTeam = (teamname, position) => {
    let tempTeamNameArray = [...teamsArray];

    tempTeamNameArray[position] = teamname;
    setTeamsArray(tempTeamNameArray);
  };

  let generateForm = () => {
    let seeds = [];

    for (let i = 0; i < numberOfTeams / 2; i++) {
      seeds.push(
        <div key={i} className="seed-wrapper">
          <div className="seedLabel">Seed {i}</div>
          <label htmlFor={`team${i * 2 + 1}`}>{`Team ${i * 2 + 1}`}</label>
          <input
            onChange={(e) => updateTeam(e.target.value, i * 2)}
            type="text"
            id={`team${i * 2 + 1}`}
          />
          <label htmlFor={`team${i * 2 + 2}`}>{`Team ${i * 2 + 2}`}</label>
          <input
            onChange={(e) => updateTeam(e.target.value, i * 2 + 1)}
            type="text"
            id={`team${i * 2 + 2}`}
          />
        </div>
      );
    }
    return seeds;
  };
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

  console.log(teamsArray);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="pageHeader">Bracket Generator Page</h2>
      <select
        onChange={(e) => {
          if (!isNaN(e.target.value)) {
            setNumberOfTeams(parseInt(e.target.value));

            let tempArray = [];
            for (let i = 0; i < parseInt(e.target.value); i++) {
              tempArray[i] = "";
            }
            setTeamsArray(tempArray);
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
      {/* <Bracket rounds={makeRounds()} /> */}
      <div className="seed-form-wrapper">{generateForm()}</div>
      <button
        onClick={async () => {
          let teamsString = teamsArray.join(",");

          let token = localStorage.getItem("id_token");

          console.log(token);

          let data = await createBracket({
            variables: {
              teams: teamsString,
              token: token,
            },
          });
        }}
      >
        Submit Teams
      </button>
    </div>
  );
}

export default Generator;
