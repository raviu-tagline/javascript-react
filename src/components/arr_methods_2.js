import React, { useEffect, useState } from "react";
import btns from "../dynamic/arr2_btn_designs";
import inputs from "../dynamic/arr2_form_design";
import Button from "../reusables/Button";
import Form from "../reusables/Form";

const Arr_2 = () => {
  const [arr, setArr] = useState([{}]);
  let obj;

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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`form submitted`, e.target.f_name.value);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    obj = [
      ...obj,
      {
        [name]: [value],
      },
    ];

    console.log(`obj`, obj);
  };

  useEffect(() => {
    obj = arr.slice();
  }, []);

  return (
    <>
      <br />
      <Form
        attributes={inputs}
        onSubmit={(e) => onSubmit(e)}
        onChange={(e) => onChange(e)}
      />
      {/* <form>
        {inputs &&
          Object.values(inputs).map(({ label, ...val }, ind) => (
            <>
              <Label key={ind} text={label} />
              <CustomInput {...val} />
              <br />
            </>
          ))}
      </form> */}
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
