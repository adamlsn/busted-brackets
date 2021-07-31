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


import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App({ match }) {
  const [page, setPage] = useState("landing");
  console.log(window.location);
  return (
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
  );
}

export default App;
