/* eslint-disable react/prop-types */
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Create from "./components/Create";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Quizes from "./components/Quizes";
import Result from "./components/Result";
import Question from "./components/Question";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/quizzes">
            <Quizes />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/question/:quizId">
            <Question />
          </Route>

          <Route path="/result">
            <Result />
          </Route>

          <Route path="/profile/:userId">
            <Profile />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
