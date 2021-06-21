import React from "react";

const Arr = () => {
  let arr = [];

  while (true) {
    let val = prompt("?");

    if (val !== "" && val) {
      arr.push(val);
    } else {
      break;
    }
  }
  console.log(`arr`, arr);

  return <></>;
};

export default Arr;
