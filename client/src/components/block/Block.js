import React from "react";
import "./Block.scss";

const Block = ({ char, color }) => {
  return (
    <div className="letter-box" style={{ backgroundColor: color }}>
      {char ? char : "-"}
    </div>
  );
};

export default Block;