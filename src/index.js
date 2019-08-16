import React from "react";
import ReactDOM from "react-dom";
import TopElement from "./topElement";
import RainbowWrapper from "./rainbowWrapper";
import TextWrapper from "./textWrapper";

import emotions from "./emotions.js";
import "./styles.css";

class App extends React.Component {
  // const default = ;

  state = {
    emotionItem: "",
    description: {
      where_from:
        "Для понимания эмоции важно понимать причину ее возникновения",
      purpose:
        "Эмоция всегда появляется с какой-то целью и сообщает важную информацию о ситуации",
      wish: "как достичь той цели, с которой эмоция приходит?",
      how_to:
        "Эмоция - это добрый друг, который приходит для того, чтобы помочь. Как установить с эмоцией взаимовыгодные отношения?"
    },
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
