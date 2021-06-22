import React from "react";
import Buttons from "../reusables/Buttons";

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
      <Buttons
        onClick={handleClick}
        text="Click for alert"
        style={{ marginTop: "10px" }}
      />
      <Buttons
        onClick={handlePrompt}
        text="Click for prompt"
        style={{ marginTop: "10px" }}
      />
      <Buttons
        onClick={handleConfirm}
        text="Click for confirm"
        style={{ marginTop: "10px" }}
      />
    </>
  );
};

export default Interactions;
