import React, { useEffect } from "react";
import "./Block.scss";

const Block = ({ char, color }) => {
  let color_block = "#DCDCDC";

  let colors = {
    Green: "#79b851",
    Orange: "#f3c237",
    Grey: "#a4aec4",
    def: "#DCDCDC",
  };

  return (
    <div className="letter-box" style={{ backgroundColor: colors[color] }}>
      {char ? char : " "}
    </div>
  );
};

export default Block;