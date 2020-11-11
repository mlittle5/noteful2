import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageOne from "./pageOne";
import About from "./about";
import Homepage from "./homepage";
import Nav from "./navbar";
import Note from "./note";
import Sidebar from "../sidebar/sidebar";
import Folders from "../folders/folders";
import '../App.css'

class TestApp extends Component {
  state = {};
  render() {
    return (
      <Router>
          <Nav />
          <div class='app'>
        <Sidebar />
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/pageOne">
          <PageOne />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/note/:id" component={Note}></Route>
        <Route path="/folder/:id" component={Folders}></Route>
        
        </div>
      </Router>
    );
  }
}

export default TestApp;
