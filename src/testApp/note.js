import React, { Component } from "react";
import dummyStore from "../dummy-store";
import { Link } from "react-router-dom";

class Note extends Component {
  render() {
    //
    const note = dummyStore.notes.find(
      (p) => p.id === this.props.match.params.id
    );
    console.log(note);
    return (
      <article className="Poem">
        <div>
          <h1>{note.name}</h1>
          <p>{note.content}</p>
        </div>
        {/* <h2>{note.name}</h2>
          {note.map((p, i) =>
            (p === '')
              ? <br key={i} />
              : <p key={i}>{p}</p>
          )} */}
      </article>
    );
  }
}

export default Note;
