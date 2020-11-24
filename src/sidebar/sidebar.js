import React, { Component } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import AppContext from "../testApp/context";
// import Folders from "../folders/folders";
import PropTypes from 'prop-types'  

class Sidebar extends Component {
  static contextType = AppContext;
  render() {
    const folders = this.context.folders.map((folder) => {
      return (
        <div key={folder.id} className="folder">
          <h4>{folder.name}</h4>
          <Link to={`/folder/${folder.id}`}>sort by folder</Link>
        </div>
      );
    });
    return (
      <div className="sidebar">
        <h1>{folders.name}</h1>
        {folders}
        <button>
          <Link to={"/addFolder"}>Add Folder</Link>
        </button>
        <button>
          <Link to={"/addNote"}>Add Note</Link>
        </button>
      </div>
    );
  }
}

export default Sidebar;

Sidebar.propTypes = {
    value: PropTypes.string
}