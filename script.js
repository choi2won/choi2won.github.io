const display = document.getElementById("display");

function clearDisplay() {
  display.value = "0";
}

function addValue(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function calculate() {
  display.value = eval(display.value);
}
