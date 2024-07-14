let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");
let delet = document.querySelector(".delet");
let clickedArray = [];
let firstValue;
let secoundValue;
let operator;
let result;
let handelSecondNumber = false;

let reset = function () {
  clickedArray = [];
  firstValue = null;
  secoundValue = null;
  operator = null;
  result = null;
  handelSecondNumber = false;
};

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    switch (e.value) {
      case "CE":
        reset();
        display.value = 0;
        break;
      case "C":
        clickedArray.splice(-1, 1);
        display.value = clickedArray.join("");
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case ".":
        if (handelSecondNumber === false) {
          clickedArray.push(e.value);
          display.value = clickedArray.join("");
          firstValue = +display.value;
        } else {
          clickedArray.push(e.value);
          display.value = clickedArray.join("");
          secoundValue = +display.value;
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        handelSecondNumber = true;
        operator = e.value;
        clickedArray = [];
        break;
      case "=":
        switch (operator) {
          case "+":
            result = firstValue + secoundValue;
            display.value = result;
            reset();
            break;
          case "-":
            result = firstValue - secoundValue;
            display.value = result;
            reset();
            break;
          case "*":
            result = firstValue * secoundValue;
            display.value = result;
            reset();
            break;
          case "/":
            result = firstValue / secoundValue;
            display.value = result;
            reset();
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  });
});
