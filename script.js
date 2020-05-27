var formulaInput = document.getElementById("formula-input");
var calcHistDiv = document.getElementById("calc-history");

formulaInput.addEventListener("keyup", function (e) {
  if (e.code === "Enter") calculate();
});

function calculate() {
  const fm = formulaInput.value;
  const formulaRegex = /^\d+(.\d+)?[+\-*/]{1}\d+(.\d+)?$/;
  const formulaValid = formulaRegex.test(fm);

  var resultText = "ERROR";
  if (formulaValid) {
    var answer;
    eval("answer=" + fm);
    resultText = fm + " = ";
    resultText += answer % 1 > 0 ? answer.toFixed(2) : answer.toString();
  }

  var resultDiv = document.createElement("DIV");
  resultDiv.appendChild(document.createTextNode(resultText));
  if (!formulaValid) resultDiv.classList.add("invalid");
  calcHistDiv.insertBefore(resultDiv, calcHistDiv.firstChild);

  formulaInput.value = "";
}
