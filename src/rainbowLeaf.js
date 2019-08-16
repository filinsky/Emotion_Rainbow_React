import React, { Component } from "react";
import "./rainbowWrapper.css";

class RainbowLeaf extends Component {
  handleEmotion = () => {
    this.props.handler(this.props.emotion);
  };

  render() {
    return (
      <div className={"leaf leaf-" + this.props.emotion.id}>
        <div
          className={"label label-" + this.props.emotion.id}
          onClick={this.handleEmotion}
        >
          {this.props.emotion.label}
        </div>
        <div
          id="anger"
          className={"rainbow-border rainbow-" + this.props.emotion.id}
          onClick={this.handleEmotion}
        />
      </div>
    );
  }
}

export default RainbowLeaf;
