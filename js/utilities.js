function getInputValue(inputId) {
  const inpUt = document.getElementById(inputId);
  const inputValueString = inpUt.value;
  inpUt.value = "";
  const inputValueNumber = parseFloat(inputValueString);
  return inputValueNumber;
}

function getElementText(elementText) {
  const elemEnt = document.getElementById(elementText);
  const elementValueString = elemEnt.innerText;
  const elementValueNumber = parseFloat(elementValueString);
  return elementValueNumber;
}

function setBalance(balAnce, newtoTal) {
  const mainBalance = document.getElementById(balAnce);
  mainBalance.innerText = newtoTal;
}
