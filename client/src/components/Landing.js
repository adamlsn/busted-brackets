function Landing({ page, setPage }) {
  return (
    <div className="hero">
      <h1>BUSTED BRACKETS</h1>
      <btn onClick={() => setPage("about")} className></btn>
    </div>
  );
}

export default Landing;
