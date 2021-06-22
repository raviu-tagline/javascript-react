import React, { useEffect, useState } from "react";
import P from "../reusables/P";

const Typeconversion = () => {
  const [type, setType] = useState();
  const [type2, setType2] = useState();
  let var1 = "123456";
  let varBool = true;
  const handleClick = () => {
    varBool = String(varBool);
    setType(typeof varBool);
    var1 = Number(var1);
    setType2(typeof var1);
  };

  useEffect(() => {
    setType2(typeof var1);
    setType(typeof varBool);
    console.log(`hello`);
  }, []);

  return (
    <>
      <button onClick={handleClick}>Click to change type of variable</button>{" "}
      <P text={`Type of boolean variable ${type} {${varBool}}`} />
      <P text={`Type of string variable ${type2} ${var1}`} />
    </>
  );
};

export default Typeconversion;
