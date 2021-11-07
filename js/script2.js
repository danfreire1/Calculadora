function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
// This function evaluates the expression and return result
function calculate() {
    var opValue = document.getElementById("result").value;
    var finalResult = eval(opValue);
    document.getElementById("result").value = finalResult;
}