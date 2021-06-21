import React from "react";

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
      <br />
      <button onClick={test}>Click to call function</button>
      <br />
      <br />
      <button onClick={test2}>Click to call expr function</button>
    </>
  );
};

export default Function_exp;
