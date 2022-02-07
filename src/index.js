import React from "react";
import ReactDOM from "react-dom";
var myName = "Paul";
var lastName = "Anigbo";
var luckyNumber = 7;
var date = new Date();

ReactDOM.render(
  <div>
    <p>created by {`${myName} ${lastName}`}</p>
    <p>copyright {`${date.getFullYear()}`}</p>
  </div>,
  document.getElementById("root")
);
