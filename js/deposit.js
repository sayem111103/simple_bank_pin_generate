document.getElementById("deposit").addEventListener("click", function () {
  const inputValue = getInputValue("deposit_value");
  if (inputValue < 1) {
    alert("please provide valid number");
    return;
  }
  const elementValue = getElementText("deposit_balance");
  const totaldeposit = inputValue + elementValue;
  if (isNaN(totaldeposit)) {
    alert("please provide number");
    return;
  }
  setBalance("deposit_balance", totaldeposit);
  const mainBalance = getElementText("main_balance");
  const totalBalance = mainBalance + inputValue;
  setBalance("main_balance", totalBalance);
});
