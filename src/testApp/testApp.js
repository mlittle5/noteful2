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
import AppContext from "./context";

class TestApp extends Component {
  state = {
    folders: [],
    notes: [],
    hasError: "",
  };
  getData = () => {
    fetch("http://localhost:9090/folders")
      .then((res) => res.json())
      .then((folders) => {
        this.setState({
          folders,
        });
        return fetch("http://localhost:9090/notes");
      })
      .then((res) => res.json())
      .then((notes) => {
        this.setState({
          notes,
        });
      })
      .catch((e) => {
        this.setState({
          hasError: "Error fetching notes and folders!",
        });
      });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    const value = {
      folders: this.state.folders,
      notes: this.state.notes,
      getData: this.getData,
    };
    return (
      <Router>
        <AppContext.Provider value={value}>
          <ErrorComponent>
            <Nav />
            <div className="app">
              {this.state.hasError}
              <Sidebar folders={this.state.folders} />

              <Route path="/" exact component={Homepage} />

              <Route path="/pageOne" component={PageOne} />

              <Route path="/addFolder" component={AddFolder} />

              <Route path="/addNote" component={AddNote} />

              <Route path="/note/:id" component={Note}></Route>
              <Route path="/folder/:id" component={Folders}></Route>
              <Route path="/error" component={ErrorComponent} />
            </div>
          </ErrorComponent>
        </AppContext.Provider>
      </Router>
    );
  }
}

export default TestApp;
