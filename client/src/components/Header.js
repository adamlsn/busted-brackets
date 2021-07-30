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
      <h1>Busted Brackets</h1>
      <nav style={{ width: "19%" }}>
        <div style={styles.navItem}>
          <Link to="/about">About</Link>
        </div>
        <div style={styles.navItem}>
          <Link to="/profile">Profile</Link>
        </div>
        <div style={styles.navItem}>
          <Link to="/create">Create</Link>
        </div>
        <div style={styles.navItem}>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
