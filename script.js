const displayNum = document.querySelector(".input-text");
const buttons = document.querySelectorAll("button");

let string = "";
const operators = ["+", "-", "*", "/", "%"]
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "=") {
      // check if the string is not empty before evaluating
      if (string.trim() !== "") {
        try {
          // Use eval to calculate the result
          string = eval(string).toString(); //
          displayNum.value = string; // display update
        } catch (err) {
          displayNum.value = "error";
          string = "";
        }
      }
    } else if (e.target.innerText === "DEL") {
      string = string.substring(0, string.length - 1); // remove last character
      displayNum.value = string; // display update
    } else if (e.target.innerText === "AC") {
      string = "";
      displayNum.value = string; // clear the display
    } else {
      const lastChar = string[string.length - 1];

      if (operators.includes(e.target.innerText)) {
        // If the last character is an operator, replace it
        if (operators.includes(lastChar)) {
          string = string.substring(0, string.length - 1) + e.target.innerText;
        } else {
          string += e.target.innerText;
        }
      }
      else {
        string += e.target.innerText;
      }

      displayNum.value = string; // Display the updated input
    }
  });
});
