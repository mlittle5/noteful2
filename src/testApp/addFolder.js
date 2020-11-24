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
            const name = e.target.name.value;
            const options = {
              method: "POST",
              body: JSON.stringify({name}),
              headers: {
                "content-type": "application/json"
              }
            };
            
            fetch("http://localhost:9090/folders", options).then((res) => {
              this.context.getData();
              this.props.history.push("/")
            });
          }}
        >
          <label name="name">Folder name: </label>
          <input id="name" type="text" name="name" required></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFolder;
