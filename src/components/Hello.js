import React from "react";

const name = "Purity";
const displayMessage = () => {
  return "i need help!";
};
const Hello = () => {
  return (
    <h1>
      {" "}
      {name}, {displayMessage()}{" "}
    </h1>
  );
};

export default Hello;
