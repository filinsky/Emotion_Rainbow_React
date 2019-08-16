import React, { Component } from "react";

class TopElement extends Component {
  state = {
    val: "3"
  };

  onChange = e => this.setState({ val: e.target.value });

  render() {
    return (
      <div id="top" className="flex-element top">
        <div id="left-range" className="left-range">
          Очень слабо
        </div>
        <div id="range-wrapper" className="range-wrapper">
          <input
            type="range"
            name="range"
            min="1"
            max="5"
            value={this.state.val}
            onChange={this.onChange}
          />
        </div>
        <div id="right-range" className="right-range">
          Очень сильно
        </div>
      </div>
    );
  }
}
export default TopElement;
