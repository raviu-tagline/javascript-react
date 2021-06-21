import React, { useEffect } from "react";

const Turnary_operator = () => {
  useEffect(() => {
    // If we not assign default value to prompt it takes empty string
    let id = prompt("What is your roll?").toLowerCase();
    alert("Value is - " + id + " type is - " + typeof id);
    let msg = alert(
      id === "employee"
        ? "Hello"
        : id === "ceo"
        ? "Hello sir"
        : id === ""
        ? "No information"
        : "Bye!"
    );

    alert(msg);
  }, []);
  return <></>;
};

export default Turnary_operator;
