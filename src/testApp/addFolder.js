import React, { Component } from "react";

class AddFolder extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Add new folder</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const options = {
              method: "POST",
              body: JSON.stringify(name),
              Endpoint: "/folders"
            };
            fetch(options).then((res) => {
              console.log(options);
            });
          }}
        >
          <label name="name">Folder name: </label>
          <input id="name" type="text" name="name"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFolder;
