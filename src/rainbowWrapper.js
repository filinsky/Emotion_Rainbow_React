import React from "react";
import RainbowLeaf from "./rainbowLeaf";
import "./rainbowWrapper.css";
import emotions from "./emotions";

function RainbowWrapper(props) {
  const leaves = emotions.map(item => {
    return (
      <RainbowLeaf
        /*       id={item.id}
        name={item.name}
        label={item.label}
  */
        handler={props.handleEmotion}
        emotion={item}
      />
    );
  });

  return (
    <div id="rainbow-wrapper" className="rainbow-wrapper">
      <div className="rainbow-center">
        Что Я <br />
        Чувствую?
      </div>
      {leaves}
    </div>
  );
}

export default RainbowWrapper;
