function Header({ page, setPage }) {
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
      <h1>Mitchell Spierings</h1>
      <nav style={{ width: "19%" }}>
        <div style={styles.navItem}>
          <btn
            onClick={() => setPage("about")}
            className={page === "about" && "active"}
          >
            About Me
          </btn>
        </div>
        <div style={styles.navItem}>
          <btn
            onClick={() => setPage("portfolio")}
            className={page === "portfolio" && "active"}
          >
            Portfolio
          </btn>
        </div>
        <div style={styles.navItem}>
          <btn
            onClick={() => setPage("contact")}
            className={page === "contact" && "active"}
          >
            Contact
          </btn>
        </div>
        <div style={styles.navItem}>
          <btn
            onClick={() => setPage("resume")}
            className={page === "resume" && "active"}
          >
            Resume
          </btn>
        </div>
      </nav>
    </div>
  );
}

export default Header;
