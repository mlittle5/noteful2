import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppContext from "./context";

class Note extends Component {
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
    //
    const note = this.context.notes.find(
      (p) => p.id === this.props.match.params.id
    );
    console.log(note);
    return (
      <article className="note">
        <div>
          <h1>{note.name}</h1>
          <p>{note.content}</p>
        </div>
        <button onClick={e => this.deleteItem(note.id)}>delete</button>
      </article>
    );
  }
}

export default Note;
