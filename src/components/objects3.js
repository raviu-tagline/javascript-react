import React from "react";
import Table from "../reusables/Table2";

const Objects3 = () => {
  const rows = {
    row1: {
      col1: "ttt",
      // col2: "xyz",
    },
    row2: {
      col1: "aaa",
      // col2: "col2",
    },
  };

  const tHeader = {
    th1: {
      text: "header1",
    },
    // th2: {
    //   text: "header2",
    // },
  };
  return (
    <div>
      <Table thead={tHeader} params={rows} />
    </div>
  );
};

export default Objects3;
