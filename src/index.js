import React from "react";
import ReactDOM from "react-dom";
import TopElement from "./topElement";
import RainbowWrapper from "./rainbowWrapper";
import TextWrapper from "./textWrapper";

import emotions from "./emotions.js";
import "./styles.css";

class App extends React.Component {
  state = {
    emotionItem: "",
    description: "",
    intensity: 2
  };

  handler = emotion => {
    this.setState({ emotionItem: emotions[emotion.id] });
    this.setState({ description: emotions[emotion.id].weak });
    console.log(emotion.name);
  };

  slider = value => {
    this.setState({ intensity: value });
    console.log("value is " + value);
  };

  render() {
    return (
      <div id="wrapper" className="wrapper">
        <TopElement value={this.state.intensity} setVal={this.slider} />
        <div id="left" className="flex-element item left">
          <RainbowWrapper handleEmotion={this.handler} />
        </div>

        <TextWrapper
          emotionElement={this.state.emotionItem}
          text={this.state.description}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
