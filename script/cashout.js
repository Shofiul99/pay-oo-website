document.getElementById("cashout-btn").addEventListener("click", () => {
  const cashcoutNumber = getValueFromInput("cashout-number");
  if(cashcoutNumber.length != 11) {
    alert("Invalid Number!");
    return;
  }
  const cashoutAmount = getValueFromInput("cashout-amount");

  const currentBalance = getCurrentBalance();

  const newBalance = currentBalance - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Invalid Amount!");
    return;
  }

  const pinInput = document.getElementById("cashout-pin");
  const pin = pinInput.value;
  if (pin === "1234") {
    alert("Cahsout Successful.");
    setBalance(newBalance);
  } else {
    alert("Wrong Pin. Cashout Failed.");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", () => {
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     if(cashoutNumber.length != 11) {
//         alert("Invalid Number!");
//         return;
//     }

//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;

//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;

//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if(newBalance < 0) {
//         alert("Invalid Amount!");
//         return;
//     }

//     const pinInput = document.getElementById("cashout-pin");
//     const pin = pinInput.value;
//     if(pin === "1234") {
//         alert("Cahsout Successful.");
//         balanceElement.innerText = newBalance;
//     } else {
//         alert("Wrong Pin. Cashout Failed.");
//         return;
//     }

// });
