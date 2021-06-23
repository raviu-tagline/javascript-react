import React from "react";

const Table = (props) => {
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
          {Object.values(props.params).map((cols, ind) => (
            <>
              <tr key={ind}>
                {props.isSerialNo && <td>{ind + 1}</td>}
                {Object.values(cols).map((val, ind2) => (
                  <>
                    <td key={ind2}>{val}</td>
                  </>
                ))}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
