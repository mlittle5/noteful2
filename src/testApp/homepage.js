import React, { Component } from "react";
import { Link } from "react-router-dom";
import dummyStore from '../dummy-store'

class Homepage extends Component {
  render() {
    const notes = dummyStore.notes.map((note) => {
      return (
        <div key={note.id} className="note">
          <h4>{note.name}</h4>
          <Link to={`/note/${note.id}`}>Learn more</Link>
        </div>
      );
    });
    return (
      <div>
        {notes}
      </div>
    );
  }
}

export default Homepage;
