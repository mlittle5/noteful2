import React, { Component } from "react";
import dummyStore from "../dummy-store";
import ErrorComponent from "./errorComponent";

class AddNote extends Component {
  state = {};

  render() {
    const selectOptions = dummyStore.folders.map((folder) => {
      return <option key={folder.id}>{folder.name}</option>;
    });
    return (
      <div>
        <h1>Add new note</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const options = {
              method: "POST",
              body: JSON.stringify(name),
              folder: document.getElementById('folder').value,
              endpoint: "/notes"
            };
            fetch(options).then((res) => {
              console.log(options);
            });
          }}
        >
          <label name="name">Note name: </label>
          <input id="name" type="text" name="name"></input>
          <label name="folder">Folder</label>
          <select id="folder" name="folder" type="select">
            {selectOptions}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNote;
