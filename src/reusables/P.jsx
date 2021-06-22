import React from "react";

const P = ({ text, ...other }) => {
  return (
    <>
      <p {...other}>{text}</p>
    </>
  );
};

export default P;
