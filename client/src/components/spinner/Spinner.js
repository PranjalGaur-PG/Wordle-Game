import React, { Fragment } from "react";
import spinner from "../../assets/Spinner2.gif";

export default ({ loading }) => {
  return loading ? (
    <Fragment>
      <img
        src={spinner}
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          margin: "auto",
          width: "100px",
        }}
        alt="Loading..."
      />
    </Fragment>
  ) : null;
};