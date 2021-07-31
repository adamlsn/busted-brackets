import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="hero">
      <h1>BUSTED BRACKETS</h1>
      <div className="button-hero">
        <Link to="/create">Create Profile</Link>
      </div>
      <div className="button-hero">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Landing;
