import React, { Component } from "react";
import ValidationError from "./validations";
import ErrorComponent from "./errorComponent";
import AppContext from "./context";

class AddNote extends Component {
  static contextType = AppContext
  state = {
    name: "",
    touched: false,
    message: "",
  };
  validateName() {
    const name = this.state.name;
    if (name.length === 0) {
      this.setState({
        message: "Name is required",
        touched: true
      });
    }
  }
  changeInput = (e) => {
    this.setState({
      name: e.target.value,
      touched: true,
    });
  };
  render() {
    const nameError = this.state.message;

    const selectOptions = this.context.folders.map((folder) => {
      return <option key={folder.id} value={folder.id}>{folder.name}</option>;
    });

    return (
      <div>
        <h1>Add new note</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const folderId = e.target.folder.value;
            const content = e.target.content.value;
            const note = { name, folderId, content };
            console.log(note)
            const options = {
              method: "POST",
              body: JSON.stringify(note),
              headers: {
                "content-type": "application/json"
              }
            };
            if (this.state.name.length === 0) {
              this.validateName();
              console.log(nameError);
              return;
            }
            fetch("http://localhost:9090/notes", options).then((res) => {
              this.context.getData();
              this.props.history.push("/")
            });
          }}
        >
          <label name="name">Note name: </label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={this.changeInput}
            required
          ></input>
          <input type="text" id="content" name="content" required ></input>
          {this.state.touched && <ValidationError message={nameError} />}
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
