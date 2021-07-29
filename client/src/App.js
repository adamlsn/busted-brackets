import "./App.css";
import "./index.css";
import Header from "./components/Header";
import About from "./components/Login";
import Resume from "./components/Profile";
import Contact from "./components/Create";
import Portfolio from "./components/Project";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("about");
  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      <Header page={page} setPage={setPage} />
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
      {page === "resume" && <Resume />}
      {page === "portfolio" && <Portfolio />}
      <Footer />
    </div>
  );
}

export default App;
