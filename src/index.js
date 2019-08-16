import React from "react";
import ReactDOM from "react-dom";
import TopElement from "./topElement";
import RainbowWrapper from "./rainbowWrapper";
import TextWrapper from "./textWrapper";

import emotions from "./emotions.js";
import "./styles.css";

class App extends React.Component {
  state = {
    description: emotions[0].name
  };

  handler = emotion => {
    this.setState({ description: emotions[emotion.id].name });
    console.log(emotion.name);
  };

  render() {
    return (
      <div id="wrapper" className="wrapper">
        <TopElement />
        <div id="left" className="flex-element item left">
          <RainbowWrapper handleEmotion={this.handler} />
        </div>

        <TextWrapper text={this.state.description} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
