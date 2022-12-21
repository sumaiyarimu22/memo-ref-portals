import React, { Component } from "react";
import ChildCOm from "./ChildCOm";

export default class ParentCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "tumpa",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        firstName: "Aysha",
      });
    }, 30000);
  }

  render() {
    console.log("parent");
    return (
      <div>
        <ChildCOm firstName={this.state.firstName} />
      </div>
    );
  }
}
