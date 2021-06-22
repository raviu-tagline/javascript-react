import React from "react";

const Table = (props) => {
  return (
    <>
      <table border="1" style={{ margin: "10px auto" }}>
        <thead>
          <tr>
            <th>Keys</th>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props.params).map((val, ind) => (
            <>
              <tr>
                <td>{val}</td>
                <td>{props.params[val]}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
