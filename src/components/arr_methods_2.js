import React, { useState } from "react";
import inputs from "../dynamic/arr_form_design";
import Buttons from "../reusables/Buttons";

const Arr_2 = () => {
  const [arr, setArr] = useState([]);
  const handleFilter = () => {
    console.log(`filter`);
  };

  const handleFind = () => {};

  const handleSome = () => {};

  const handleEvery = () => {};

  return (
    <>
      <br />
      <form>
        {inputs &&
          Object.values(inputs).map(({ label, ...val }, ind) => (
            <>
              <label key={ind}>{label}</label>
              <input {...val} />
              <br />
              <br />
            </>
          ))}
      </form>
      <br />
      <Buttons text="Filter" onClick={handleFilter} />
      <br />
      <Buttons text="Find" onClick={handleFind} style={{ marginTop: "10px" }} />
      <br />
      <Buttons text="Some" onClick={handleSome} style={{ marginTop: "10px" }} />
      <br />
      <Buttons
        text="Every"
        onClick={handleEvery}
        style={{ marginTop: "10px" }}
      />
    </>
  );
};

export default Arr_2;
