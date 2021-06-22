import React from "react";
import Button from "../reusables/Button";

const Use_strict = () => {
  const handleClick = () => {
    "use strict";
    /* test = 12; // these gives an error because test is not declared still we try to access variable
    alert(test); */

    let test = 20;
    alert(test + " example from use strict");
  };

  const name = () => {
    const test = 20;
    alert(test);
  };

  return <Button onClick={name} text="Use strict example" />;
};

export default Use_strict;
