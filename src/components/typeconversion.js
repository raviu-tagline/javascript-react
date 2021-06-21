import React, { useEffect, useState } from "react";

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
      <p>
        Type of boolean variable {type} {`${varBool}`}
      </p>
      <p>
        Type of string variable {type2} {var1}
      </p>
    </>
  );
};

export default Typeconversion;
