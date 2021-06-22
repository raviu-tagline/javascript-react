import React, { useCallback, useEffect, useState } from "react";
import Button from "../reusables/Button";
import P from "../reusables/P";
const Login = () => {
  let [userName, setUser] = useState("default");
  const [password, setPassword] = useState("");

  const passCallback = useCallback((password) => {
    if (password === "admin") {
      alert("Welcome Master");
    } else if (password !== "" && password !== "admin") {
      alert("Wrong password");
    } else {
      alert("Password not provide");
    }
  }, []);

  const userCallback = useCallback((userName) => {
    console.log(`userName in userCallback`, userName);
    if (userName === "admin") {
      let result1 = prompt("Enter password");
      setPassword(result1, passCallback(result1));
    } else if (userName !== "default" && userName !== "admin") {
      alert("Don't recognize");
    } else {
      alert("Not provide login information");
    }
  }, []);

  // Method to change state using setState() and callback function that performs operation after state change.
  const handleLogin = () => {
    let result = prompt("Who's there?");
    setUser(result, userCallback(result));
  };

  // Method that try to change state directly without any setState()
  const handleState = () => {
    let result = prompt("Set state...");
    // Here state is const so we can't change it. But what if state is defined as let?
    // userName = result;
    userName = result; // Here state defined with let
    console.log(`userName`, userName); // Display the change but not affect in UI
  };

  // Method that change the state using setState() and execute code immediately after state change.
  const handleStateMethod = () => {
    let result = prompt("setState method....");
    setUser(result);
    // Here we get null or empty string. But UI shows that state had been changed
    console.log(`userName using setState method --`, userName);
  };

  useEffect(() => {
    console.log(`use Effect call`);
  }, [userName, password]);
  return (
    <>
      <Button
        onClick={handleState}
        text="set state directly"
        style={{ marginTop: "10px" }}
      />
      <Button
        onClick={handleStateMethod}
        text="set state using setState()"
        style={{ marginTop: "10px" }}
      />
      <Button
        onClick={handleLogin}
        text="Login here using callback() and setState()"
        style={{ marginTop: "10px" }}
      />
      {/* This will not rendered when state changes because react will not re-render component when we directly change state */}
      <P text={`user name: ${userName}`} />
      <P text={`password: ${password}`} />
    </>
  );
};

export default Login;
