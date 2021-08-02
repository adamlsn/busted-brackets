<<<<<<< HEAD
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
=======
import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';


import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup'

const client = new ApolloClient({
  request:operation => {
    const token = localStorage.getItem('_id_token');
    operation.setContext({
      headers:{
        authorization:token ? `Bearer ${token}` : ''
      }
    });
  },
  uri:'/graphql'
})

>>>>>>> 0c201f1e4a72a7886af868196279c4ba254d5b8e

function App() {
  const [page, setPage] = useState("landing");
  return (
<<<<<<< HEAD
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
=======
  <ApolloProvider client={client}>
    <Router>
    <div>
      <Header/>
      <div className="container">
        <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/login" component={Login}/>
       <Route exact path="/signup" component={Signup}/>
       <Route exact path="/profile/:username?" component={Profile}/>
        </Switch>
      </div>
      <Footer/>
    </div>
    </Router>
  </ApolloProvider>
>>>>>>> 0c201f1e4a72a7886af868196279c4ba254d5b8e
  );
}

export default App;
