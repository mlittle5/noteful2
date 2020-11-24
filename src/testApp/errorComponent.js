import React, { Component } from "react";

class ErrorComponent extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError === true) {      
        return (
          <h2>Error!!!!!!</h2>
        );
      }
      return this.props.children;
  }
}

export default ErrorComponent;
