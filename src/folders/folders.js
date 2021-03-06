import React, { Component } from "react";
// import '../sidebar.css'
import { Route } from "react-router-dom";
// import Note from "../testApp/note";
import {Link} from "react-router-dom"
import AppContext from "../testApp/context";

class Folders extends Component {
  static contextType = AppContext
  render() {
    //
    const notes = this.context.notes.filter(
      //   dummyStore.notes.find((p) => p.folderId === this.props.match.params.id)
      (NOTES) => NOTES.folderId === this.props.match.params.id
    );
    const mappedNotes = notes.map((note) => {
        return (
            <div key={note.id}>
                <h1>{note.name}</h1>
                <h4>{note.content}</h4>
              <Link to={`/note/${note.id}`}>Learn more</Link>
            </div>
        )
    })
    return (
      <article className="note">
        {mappedNotes}
        {/* <h2>{notes.name}</h2>
              {notes.name.map((p, i) =>
                (p === '')
                  ? <br key={i} />
                  : <p key={i}>{p}</p>
              )} */}
      </article>
    );
  }
}

export default Folders;
