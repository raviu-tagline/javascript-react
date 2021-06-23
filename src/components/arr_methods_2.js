import React, { useEffect, useState } from "react";
import btns from "../dynamic/arr2_btn_designs";
import inputs from "../dynamic/arr2_form_design";
import Button from "../reusables/Button";
import Form from "../reusables/Form";
import Table from "../reusables/Table";

const Arr_2 = () => {
  const [arr, setArr] = useState([]);
  const [obj, setObj] = useState({});

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
    if (obj) {
      setArr([...arr, obj]);
    } else {
      console.log(`Array empty`);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    if (value) {
      setObj({
        ...obj,
        [name]: value,
      });
    }

    console.log(`obj in change`, obj);
  };

  const tHeader = {
    th1: {
      text: "sr. no",
    },
    th2: {
      text: "Values",
    },
  };

  useEffect(() => {}, [arr]);

  return (
    <>
      <br />
      {console.log(`obj in component`, obj)}
      <Form
        attributes={inputs}
        values={obj && obj}
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
      {arr &&
        Object.values(arr).map((val, ind) => (
          <>
            {console.log(`Hello there`, val)}
            <Table thead={tHeader} params={val} />
          </>
        ))}
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
