import "./App.css";
import "./index.css";
import Header from "./components/Header";
import About from "./components/About";
import Create from "./components/Create";
import Login from "./components/Login";
import Landing from "./components/Landing";
// import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("landing");
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "aliceblue" }}>
        <Header page={page} setPage={setPage} />
        <Route path="/about" component={About} />
        <Route path="/create" component={Create} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Landing} exact />

        {/* {page === "create" && <Create />}
        {page === "login" && <Login />}
        {page === "landing" && <Landing />} */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
