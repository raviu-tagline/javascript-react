import React from "react";

const Table = (props) => {
  console.log(`props`, props);
  return (
    <>
      <table border="1" style={{ margin: "10px auto" }}>
        <thead>
          <tr>
            {props.thead &&
              Object.values(props.thead).map((val, ind) => <th>{val.text}</th>)}
          </tr>
        </thead>
        <tbody>
          {props?.params &&
            Object.keys(props.params).map((val, ind) => (
              <>
                <tr>
                  {props.isSerialNo && <td>{ind + 1}</td>}
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
