import React from "react";

const Interactions = () => {
  const handleClick = () => {
    alert("You all know about alert");
  };

  const handlePrompt = () => {
    const ans = prompt("Enter your answer of 2+3*6", 50);
    if (ans) {
      if (ans == 20) {
        alert("Your ans is " + ans);
      } else {
        console.log(`ans`, ans);
        alert("You entered wrong answer");
      }
    } else {
      alert("You don't provide any answer");
    }
  };

  const handleConfirm = () => {
    let admin = window.confirm("Are you an admin?");
    alert(admin ? "You are admin" : "You are not an admin");
  };

  return (
    <>
      <button onClick={handleClick}>Click for alert</button>{" "}
      <button onClick={handlePrompt}>Click for prompt</button>{" "}
      <button onClick={handleConfirm}>Click for confirm</button>
    </>
  );
};

export default Interactions;
