function About(props) {
  const style = {
    text: {
      width: "40%",
      margin: "auto",
      fontSize: "22px",
    },
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="pageHeader">About Page</h2>
      <p style={style.text}>Hello!</p>
    </div>
  );
}

export default About;
