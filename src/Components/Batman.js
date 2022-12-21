import React, { Component } from "react";

export default class Batman extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Sadril",
    };
    this.superHeroRef = React.createRef();
    this.changeBAckgroundText = React.createRef();
  }

  changeColor() {
    this.superHeroRef.current.style.fontSize = "4rem";
  }

  changeBAckground() {
    this.changeBAckgroundText.current.style.backgroundColor = "black";
    this.changeBAckgroundText.current.style.color = "white";
  }
  render() {
    return (
      <div>
        <h1 ref={this.superHeroRef}>Batman</h1>
        <button onClick={() => this.changeColor()}>Change Color</button>

        <h1 ref={this.changeBAckgroundText}>hi hello bye bye</h1>
        <button onClick={() => this.changeBAckground()}>clickMe</button>
      </div>
    );
  }
}
