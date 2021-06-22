import React, { useEffect, useState } from "react";
import Buttons from "../reusables/Buttons";
import P from "../reusables/P";

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
    /* states: {
      state1: "Gujarat",
      state: "Test",
    },
    test: {
      h1: {
        pqr: "in test st 1",
        age: 50,
      },
      heritage: "city",
    }, */
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
              /* "area name": [
                { Katargam: "395004" },
                { varachha: "394101" },
                { amreli: "395101" },
                { adajan: "396101" },
              ], */
              // pincode: ["395004", "394101", "395101", "395601"],
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

    console.log(`value`, value);
    console.log(`rest`, rest);

    setPrint(rest);

    // handleObject(rest);
  };

  useEffect(() => {
    tmp.length !== 0 && setPrint(tmp);
  }, []);
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
      {console.log(`print`, print)}
      <div className="test" style={{ display: "table", margin: "0 auto" }}>
        <table>
          <thead>
            <tr>
              <th>Keys</th>
              <th></th>
              <th></th>
              <th></th>
              <th>Vals</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(print).map((k, ind) => (
              <tr key={ind}>
                <td>
                  <P text={k} />
                </td>
                <td></td>
                <td>-</td>
                <td></td>
                <td>
                  <P text={print[k]} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <Buttons onClick={() => handleRemove(print)} text="Remove item by key" />
    </div>
  );
};

export default Objects;
