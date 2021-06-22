import React from "react";

const Buttons = ({ text, ...props }) => {
  return (
    <>
      <button {...props}>{text}</button>
    </>
  );
};

export default Buttons;
