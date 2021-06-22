import React, { useEffect } from "react";

const Logical = () => {
  let var1 = true;
  let var2 = false;
  const isTrue = (param = "") => {
    alert("variable is true " + param);
  };

  const isFalse = (param) => {
    alert("False value executed " + param);
  };

  const checkTrue = () => {
    var1 &&
      isTrue(
        "short circuit AND condition"
      ); /* This is short circuit evaluation of && AND operator */

    var1 &&
      var2 &&
      isTrue(); /* Now we call true function if var1 and var2 both are true */

    (var1 || var2) &&
      isTrue(
        "OR condition"
      ); /* Now we call true function if var1 or var2 both are true */
  };

  const checkFalse = () => {
    var2 ||
      isFalse(var2); /* This is short circuit evaluation of && AND operator */

    console.log(`var1`, var1);

    var1 || var2 || isFalse(var1);
  };

  return (
    <>
      <br />
      <Button
        onClick={checkTrue}
        text="Click to checkTrue"
        style={{ marginTop: "10px" }}
      />
      <Button
        onClick={checkFalse}
        text="Click to checkFalse"
        style={{ marginTop: "10px" }}
      />
    </>
  );
};

export default Logical;
