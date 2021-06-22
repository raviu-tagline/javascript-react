import React from "react";
import Buttons from "../reusables/Buttons";

const Variable = () => {
  const handleClick = () => {
    let var1 = "test";
    alert("var1 " + var1);
    var var2 = "variable 2";
    alert("var2 " + var2);

    var var2 = "test32"; // These allows to redeclare and reinitialize variable
    alert("var2 new - " + var2);

    /* let var1 = "test2" // These gives an error because let not allows to redeclare variable but it allows to re-initialize variable
    alert("var1" + var1)  */

    const PI = 3.1415123145;
    alert("PI - " + PI);
    /* PI = 2.14 // These gives error because const not allows to re-declare or re-initialize variable */
  };

  return <Buttons onClick={handleClick} text="Variable example" />;
};

export default Variable;
