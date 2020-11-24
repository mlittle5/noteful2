import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppContext from "./context";
import PropTypes from 'prop-types';

class Homepage extends Component {
  
  static contextType = AppContext
  deleteItem = (id) => {
    fetch("http://localhost:9090/notes/" + id, {
      method: "delete"
    })
    .then(res => {
      this.context.getData()
      this.props.history.push("/")
    })
  }
  render() {
    const notes = this.context.notes.map((note) => {
      return (
        <div key={note.id} className="note">
          <h4>{note.name}</h4>
          <Link to={`/note/${note.id}`}>Learn more</Link>
          <button onClick={e => this.deleteItem(note.id)}>delete</button>
        </div>
      );
    });
    return (
      <div className="notes">
        {notes}
      </div>
    );
  }
  
}



export default Homepage;
