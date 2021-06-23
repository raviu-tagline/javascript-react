import React from "react";
import Table from "../reusables/Table2";

const Objects2 = () => {
  const rows = {
    row1: {
      col1: "test",
      col2: "test2",
      col3: "test3",
      col4: "test4",
    },
    row2: {
      col1: "abc",
      col2: "def",
      col3: "ghi",
      col4: "cvx",
    },
    row3: {
      col1: "abc",
      col2: "def",
      col3: "ghi",
      col4: "cvx",
    },
  };

  const tHeader = {
    th1: {
      text: "sr. no",
    },
    th2: {
      text: "key",
    },
    th3: {
      text: "value",
    },
    th4: {
      text: "pair",
    },
    th5: {
      text: "vals",
    },
  };
  return (
    <div>
      <Table thead={tHeader} isSerialNo params={rows} />
    </div>
  );
};

export default Objects2;
