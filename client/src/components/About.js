import { Bracket, RoundProps } from "react-brackets";

function About(props) {
  const style = {
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

  const roundsWithDBData: RoundProps[] = [
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

  const rounds: RoundProps[] = [
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
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="pageHeader">About Busted Brackets</h2>
      <br></br>
      <p style={style.text}>
        Hello! Thank you for visiting Busted Brackets! This site is a user
        friendly/interactive site for generating brackets, for whatever purpose
        you may have! You can select from several differnet types of brackets,
        and invite your friends to join/edit the brackets for your pre
        determined purposes. Please go ahead and make sure you are logged in, or
        have created a profile! Happy Bracket Busting!!
      </p>
      <br></br>
      <p style={style.text}>
        Please see the below brackets. Please consider these as a few different
        Bracket examples that you can use/create when creating your brackets!!
      </p>
      <br></br>
      <Bracket rounds={roundsWithDBData} />
    </div>
  );
}

export default About;
