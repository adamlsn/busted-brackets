import { Link } from "react-router-dom";

function Landing() {
  const myStyles = {
    title: {
      display: "inlineBlock",
      marginTop: "18%",
    },
  };
  return (
    <section>
      <div
        className="hero"
        style={{
          textAlign: "center",
        }}
      >
        <h1 style={myStyles.title} className="heroTitle">
          <Link to="/about">BUSTED BRACKETS</Link>
        </h1>
        <div className="button-hero">
          <Link to="/signup">Sign Up</Link>
        </div>
        <div className="button-hero">
          <Link to="/login">Login</Link>
        </div>
        <div className="button-hero">
          <Link to="/about">About</Link>
        </div>
      </div>
    </section>
  );
}

export default Landing;
