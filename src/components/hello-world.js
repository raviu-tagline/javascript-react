import React from "react";

const Hello_world = () => {
  const handleClick = () => {
    alert("Hello world!!!");

    /* alert("hello")[(1, 2)].forEach(alert); // These gives an error because it we not put semicolon here and it treat as single sentence.*/
  };
  return <button onClick={handleClick}>Hello world example</button>;
};

export default Hello_world;
