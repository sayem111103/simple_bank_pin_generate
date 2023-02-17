document.getElementById("widthdraw").addEventListener("click", function () {
  const widthdrawValue = getInputValue("widthdraw_value");
  if (widthdrawValue < 1) {
    alert("please provide valid amount");
  }
  const widthdrawElement = getElementText("widthdraw_balance");
  const totalWidthdraw = widthdrawValue + widthdrawElement;
  if (isNaN(totalWidthdraw)) {
    alert("please provide number");
    return;
  }
  setBalance("widthdraw_balance", totalWidthdraw);
  const mainBaLance = getElementText("main_balance");
  const remainBalance = mainBaLance - widthdrawValue;
  setBalance("main_balance", remainBalance);
});
