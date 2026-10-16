document.getElementById("cashout-btn").addEventListener("click", () => {
  const cashcoutNumber = getValueFromInput("cashout-number");
  if (cashcoutNumber.length != 11) {
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

    const transactionContainer = document.getElementById(
      "transaction-conatiner",
    );
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
      <div class="bg-base-100 w-full shadow rounded-2xl p-5">
          <p>Cashout Number: ${cashcoutNumber}</p><br>
          <p>Cahsout Amount: ${cashoutAmount}</p>
          <p>Time: ${new Date()}</p>
      </div>
    `;
    transactionContainer.append(newHistory);
  } else {
    alert("Wrong Pin. Cashout Failed.");
    return;
  }
});
