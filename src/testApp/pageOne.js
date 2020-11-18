import React, { Component } from "react";
import dummyStore from "../dummy-store";
import {Link} from 'react-router-dom';

class PageOne extends Component {
  render() {
    const notes = dummyStore.notes.map((note) => {
      return (
        <div key={note.id} className="note">
          <h4>{note.name}</h4>
          <Link to={`/note/${note.id}`}>
              Learn more
          </Link>
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

export default PageOne;
