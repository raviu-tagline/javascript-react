import React, { useEffect, useState } from "react";
import Button from "../reusables/Button";
import P from "../reusables/P";

const Constructor = () => {
  const [sum, calcSum] = useState(0);
  const [mul, calcMul] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function Calculator() {
    this.read = function () {
      this.num1 = +prompt("Enter first value", 0);
      this.num2 = +prompt("Enter second value", 0);
    };

    this.sum = function () {
      return this.num1 + this.num2;
    };

    this.mul = function () {
      return this.num1 * this.num2;
    };
  }
  let cal = new Calculator();

  const handleSum = () => {
    calcSum(num1 + num2);
  };

  const handleMul = () => {
    calcMul(num1 * num2);
  };

  const handleReset = () => {
    setNum1(0);
    setNum2(0);
    calcSum(0);
    calcMul(0);
    cal.read();
    setNum1(cal.num1);
    setNum2(cal.num2);
  };

  useEffect(() => {
    cal.read();
    setNum1(cal.num1);
    setNum2(cal.num2);
    console.log(`cal.num1`, cal.num1);
  }, []);

  return (
    <>
      <P text={`Answer of sum: ${sum}`} />
      <P text={`Answer of multiplication: ${mul}`} />
      <Button text="Add" onClick={handleSum} style={{ marginTop: "10px" }} />
      <Button
        text="Multiplication"
        onClick={handleMul}
        style={{ marginTop: "10px" }}
      />
      <Button
        text="Reset"
        onClick={handleReset}
        style={{ marginTop: "10px" }}
      />
    </>
  );
};

export default Constructor;
