import React from "react";
import Block from "../block/Block";
import "./Row.scss";

const Row = ({ attempt }) => {
  const { response, color } = attempt;
  let row = [];
  for (var i = 0; i < 5; i++)
    row.push(
      <Block
        char={response.length >= i + 1 ? response[i] : " "}
        color={color.length === 5 ? color[i] : "def"}
        key={i}
      />
    );
  return <div className="letter-row">{row}</div>;
};

export default Row;