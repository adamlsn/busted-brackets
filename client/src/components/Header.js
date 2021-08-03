import { Link } from "react-router-dom";

function Header() {
  const styles = {
    navItem: {
      display: "inline-block",
      margin: "2%",
      color: "azure",
      fontSize: "21px",
    },
  };
  return (
    <div className="header">
      <h1>
        <Link to="/about">BUSTED BRACKETS</Link>
      </h1>
      <nav style={{ width: "19%" }}>
        <div style={styles.navItem}>
          <Link to="/about">About</Link>
        </div>
        <div style={styles.navItem}>
          <Link to="/profile/tom">Profile</Link>
        </div>
        <div style={styles.navItem}>
          <Link to="/signup">Create</Link>
        </div>
        <div style={styles.navItem}>
          <Link to="/login">Login</Link>
        </div>
        <dvi style={styles.navItem}>
          <Link to="/bracket">Bracket Generator</Link>
        </dvi>
      </nav>
    </div>
  );
}

export default Header;
