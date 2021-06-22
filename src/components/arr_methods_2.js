import React, { useState } from "react";
import btns from "../dynamic/arr2_btn_designs";
import inputs from "../dynamic/arr2_form_design";
import Button from "../reusables/Button";
import CustomInput from "../reusables/CustomInput";
import Label from "../reusables/Label";

const Arr_2 = () => {
  const [arr, setArr] = useState([]);
  const handleFilter = () => {
    console.log(`filter`);
  };

  const handleFind = () => {
    console.log(`Find click`);
  };

  const handleSome = () => {
    console.log(`Some click`);
  };

  const handleEvery = () => {
    console.log(`Every click`);
  };

  const handleClicks = (text) => {
    switch (text) {
      case "Filter":
        return handleFilter;

      case "Some":
        return handleSome;

      case "Every":
        return handleEvery;

      case "Find":
        return handleFind;

      default:
        break;
    }
  };

  return (
    <>
      <br />
      <form>
        {inputs &&
          Object.values(inputs).map(({ label, ...val }, ind) => (
            <>
              <Label key={ind} text={label} />
              <CustomInput {...val} />
              <br />
            </>
          ))}
      </form>
      <br />
      {Object.values(btns).map(({ text, ...other }, ind) => (
        <>
          <Button
            key={ind}
            text={text}
            onClick={handleClicks(text)}
            {...other}
          />
          <br />
        </>
      ))}
    </>
  );
};

export default Arr_2;
