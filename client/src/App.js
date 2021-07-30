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

function App({ match }) {
  const [page, setPage] = useState("landing");
  console.log(window.location);
  return (
    <BrowserRouter>
      {window.location.pathname !== "/" && <Header />}
      <div style={{ backgroundColor: "aliceblue", height: "100%" }}>
        <Route path="/about" component={About} />
        <Route path="/create" component={Create} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Landing} exact />

        {/* {page === "create" && <Create />}
        {page === "login" && <Login />}
        {page === "landing" && <Landing />} */}
      </div>
      {window.location.pathname !== "/" && <Footer />}
    </BrowserRouter>
  );
}

export default App;
