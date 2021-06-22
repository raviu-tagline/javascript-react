import React, { useEffect, useState } from "react";
import Button from "../reusables/Button";
import P from "../reusables/P";
import Table from "../reusables/Table";
const Objects = () => {
  // No such restrictions to define key in object
  let obj = {
    for: "test",
    return: "test2",
    false: "false",
  };

  // Object keys are in ordered format
  let ordred = {
    23: "test 1",
    1: "test 2",
    21: "test 3",
  };

  const [mObj, setMObj] = useState({
    countries: {
      country1: {
        "country id": "1",
        "country name": "India",
        states: {
          "state id": "1.1",
          "state name": "Gujarat",
          cities: {
            "city id": "1.1.1",
            "city name": "Surat",
            areas: {
              "area id": "1.1.1.1",
              "area name": "Test",
            },
          },
          "other states": {
            state1: "Rajasthan",
            state2: "New delhi",
            state3: "Karnataka",
            state4: "Tamil nadu",
            state5: "Andhra Pradesh",
          },
        },
      },
    },
  });

  const [print, setPrint] = useState({});

  // If you want keys same as defined then use + sign
  let strObj = {
    "+23": "test1",
    "+1": "test 2",
    "+21": "test 3",
  };
  let tmp = {};

  const handleObject = (obj) => {
    let vals = Object.values(obj);
    let kys = Object.keys(obj);
    vals.forEach((val, ind) => {
      if (typeof val === "object") {
        handleObject(val);
      } else {
        rtrnParagraph(kys[ind], val);
      }
    });
  };

  const rtrnParagraph = (key, value) => {
    tmp = {
      ...tmp,
      [key]: value,
    };
  };

  const findKeyValue = (obj, key) => {
    let vals = Object.values(obj);
    let kys = Object.keys(obj);

    vals.forEach((val, ind) => {
      if (typeof val === "object") {
        findKeyValue(val, key);
      } else {
        if (key.toLowerCase() === kys[ind].toLowerCase()) {
          delete obj[kys[ind]];
          // return true;
        }
      }
    });
  };

  const handleRemove = (obj) => {
    let key = prompt("Which key do you want to remove?");

    // console.log(`key`, key);
    // findKeyValue(obj, key);

    const { [key]: value, ...rest } = obj;

    setPrint(rest);

    // handleObject(rest);
  };

  useEffect(() => {
    tmp.length !== 0 && setPrint(tmp);
  }, []);

  const tStyle = {
    border: "1",
    style: { margin: "10px auto 0 auto" },
  };

  const tHeader = {
    th1: {
      text: "sr. no",
    },
    th2: {
      colSpan: "3",
      text: "Keys",
    },
    th3: {
      colSpan: "2",
      text: "Values",
    },
  };
  return (
    <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
      Objects 1
      {Object.keys(obj).map((val, ind) => (
        <P key={ind} text={`${val} - ${obj[val]}`} />
      ))}
      --------------------------
      <br />
      Object 2{" "}
      {Object.keys(ordred).map((val, ind) => (
        <P key={ind} text={`${val} - ${ordred[val]}`} />
      ))}
      --------------------------
      <p />
      Object 3{" "}
      {Object.keys(strObj).map((val, ind) => (
        <P key={ind} text={`${+val} - ${ordred[val]}`} />
      ))}
      --------------------------
      <br />
      state objects
      <br />
      --------------------------
      {mObj && handleObject(mObj)}
      <br />
      <Table params={print} />
      <Button onClick={() => handleRemove(print)} text="Remove item by key" />
    </div>
  );
};

export default Objects;
