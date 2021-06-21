import React from "react";

const Use_strict = () => {
  const handleClick = () => {
    "use strict";
    /* test = 12; // these gives an error because test is not declared still we try to access variable
    alert(test); */

    let test = 20;
    alert(test + " example from use strict");
  };

  const name = (params) => {
    const test = 20;
    alert(test);
  };

  return <button onClick={name}>Use strict example</button>;
};

export default Use_strict;
