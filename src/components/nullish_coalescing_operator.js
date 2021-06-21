import React, { useEffect } from "react";

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
      <br />
      <br />
      <button onClick={handleNullish}>Click for result of nullish</button>
      <br />
      <br />
      <button onClick={handleOR}>Click for result of OR operator</button>
    </>
  );
};

export default Nullish;
