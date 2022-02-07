import React from "react";
import ReactDOM from "react-dom";
var myName = "Paul";
var lastName = "Anigbo";
var luckyNumber = 7;
var date = new Date();

const customStyles = {
  border: "1px solid red",
  color: "red",
  textAlign: "center",
  paddingTop: "10px"
};

let greetings;

const currentDate = new Date();

if (currentDate.getHours() < 12) {
  greetings = "Good Morning! ";
  customStyles.color = "red";
  customStyles.border = "1px solid red";
} else if (currentDate.getHours() > 12 && currentDate.getHours() < 18) {
  greetings = "Good Afternoon! ";
  customStyles.color = "green";
  customStyles.border = "1px solid green";
} else {
  greetings = "Good Evening! ";
  customStyles.color = "blue";
  customStyles.border = "1px solid blue";
}

ReactDOM.render(
  <div>
    <h1 style={customStyles} id="gretingText">
      {greetings}
    </h1>
  </div>,
  document.getElementById("root")
);
