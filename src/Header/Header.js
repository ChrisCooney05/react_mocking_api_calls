import React, { Component } from "react";
import { options } from "../constants";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const res = await fetch(
      "https://api.github.com/users/ChrisCooney05",
      options
    );
    const data = await res.json();
    this.setState({ userInfo: data });
  }

  render() {
    const { userInfo } = this.state;
    return (
      <div className="username">
        <h1>{userInfo.name}</h1>
      </div>
    );
  }
}

export default Header;
