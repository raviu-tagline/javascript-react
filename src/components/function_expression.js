import React from "react";
import Buttons from "../reusables/Buttons";

const Function_exp = () => {
  // Function Declaration can be called earlier than it is defined.
  function test() {
    alert("Simple func called");
  }

  // Function Expression is created when the execution reaches it and is usable only from that moment.
  const test2 = () => {
    alert("2 + 3 = " + (2 + 3));
  };

  return (
    <>
      <Buttons
        text="Click to call function"
        onClick={test}
        style={{ marginTop: "10px" }}
      />
      <Buttons
        text="Click to call expr function"
        onClick={test2}
        style={{ marginTop: "10px" }}
      />
    </>
  );
};

export default Function_exp;
