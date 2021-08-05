import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from './pages/Home';
import About from './pages/About';
import Bracket from './pages/Bracket';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup'

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("_id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
  <ApolloProvider client={client}>
    <Router>
    <div>
      <Header/>
      <div className="container">
      <div className="outer">
        <div className="inner">
        <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/about" component={About}/>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/signup" component={Signup}/>
       <Route exact path="/bracket" component={Bracket}/>
       <Route exact path="/profile/:username?" component={Profile}/>
        </Switch>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;
