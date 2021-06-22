import React, { useEffect } from "react";
import Buttons from "../reusables/Buttons";

const Nullish = () => {
  let var1 = false; // This as false
  let var2 = undefined;
  let var3 = "Third variable";

  let user = false;
  let age = null;
  let name = "Third variable";

  // Return is same for both but working is different.
  // Nullish coalescing operator is returns first *defined* value.
  // Logical OR operator returns first truthy value.

  const handleNullish = () => {
    alert(var1 ?? var2 ?? var3); // Returns false
  };

  const handleOR = () => {
    alert(user || age || name); // Returns 'Third variable'
  };

  useEffect(() => {}, []);
  return (
    <>
      <Buttons
        onClick={handleNullish}
        text="Click for result of nullish"
        style={{ marginTop: "10px" }}
      />
      <Buttons
        onClick={handleOR}
        text="Click for result of OR operator"
        style={{ marginTop: "10px" }}
      />
    </>
  );
};

export default Nullish;
