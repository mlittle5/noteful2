import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageOne from "./pageOne";
import Homepage from "./homepage";
import Nav from "./navbar";
import Note from "./note";
import Sidebar from "../sidebar/sidebar";
import Folders from "../folders/folders";
import "../App.css";
import AddFolder from "./addFolder";
import AddNote from "./addNote";
import ErrorComponent from "./errorComponent";

class TestApp extends Component {
  state = {
    folders: "",
  };
  render() {
    return (
      <Router>
        <ErrorComponent>
        <Nav />
        <div className="app">
          <Sidebar folders={this.state.folders} />

          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/pageOne">
            <PageOne />
          </Route>
          <Route path="/addFolder">
            <AddFolder />
          </Route>
          <Route path="/addNote">
            <AddNote />
          </Route>
          <Route path="/note/:id" component={Note}></Route>
          <Route path="/folder/:id" component={Folders}></Route>
          <Route path="/error" component={ErrorComponent} />
        </div>
        </ErrorComponent>
      </Router>
    );
  }
}

export default TestApp;
