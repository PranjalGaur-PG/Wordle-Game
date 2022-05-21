import React from "react";
import './Block.scss';

const Block = ({ char }) => {
  return <div className="letter-box">{char ? char : "-"}</div>;
};

export default Block;