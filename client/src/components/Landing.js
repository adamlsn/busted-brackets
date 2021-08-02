import { Link } from "react-router-dom";

function Landing() {
  return (
    <section>
      <div
        className="hero"
        style={{
          textAlign: "center",
        }}
      >
        <h1 className="heroTitle">BUSTED BRACKETS</h1>
        <div className="button-hero">
          <Link to="/create">Create Profile</Link>
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
