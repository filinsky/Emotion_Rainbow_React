import React from "react";

function TextWrapper(props) {
  return (
    <div id="right" className="flex-element item right">
      <div id="description" className="description">
        <h2>I'm a text</h2>
        <p>purpose is {props.text}</p>
      </div>
    </div>
  );
}

export default TextWrapper;
