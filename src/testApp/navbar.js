import React, { Component } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            {/* {this.state.test.test} */}
            <h1><Link to="/">Noteful</Link></h1>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
