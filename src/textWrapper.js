import React from "react";

function TextWrapper({ emotionElement, text }) {
  return (
    <div id="right" className="flex-element item right">
      <div id="description" className="description">
        <h2>{emotionElement.label}</h2>
        <h3>Откуда берётся эта эмоция: </h3>
        <p>{text.where_from}</p>
        <h3>О чем она говорит: </h3>
        <p>{text.purpose}</p>
        <h3>Чего эта эмоция хочет: </h3>
        <p>{text.wish}</p>
        <h3>Как подружиться с этой эмоцией: </h3>
        <p>{text.how_to}</p>
      </div>
    </div>
  );
}

export default TextWrapper;
