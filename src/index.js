import React from "react";
import ReactDOM from "react-dom";
var myName = "Paul";
var lastName = "Anigbo";
var luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>Welcome back {`${myName} ${lastName}`}</h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
