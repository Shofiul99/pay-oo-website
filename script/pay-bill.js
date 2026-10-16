document.getElementById("pay-bill-btn").addEventListener("click", () => {
  const bankAccount = getValueFromInput("pay-bill-bank");
  if (bankAccount === "Select Bank") {
    alert("Select Bank Account");
    return;
  }

  const accno = getValueFromInput("pay-bill-number");
  if (accno.length != 11) {
    alert("Invalid Number!");
    return;
  }

  const amount = getValueFromInput("pay-bill-amount");
  const newBalance = getCurrentBalance() - Number(amount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  const pin = getValueFromInput("pay-bill-pin");
  if (pin === "1234") {
    alert("Payemnt Successful");
    setBalance(newBalance);

    const transactionContainer = document.getElementById(
      "transaction-conatiner",
    );
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
      <div class="bg-base-100 w-full shadow rounded-2xl p-5">
          <p>Bank: ${bankAccount}</p><br>
          <p>Account No: ${accno}</p>
          <p>Paid Amount: ${amount}</p><br>
          <p>Time: ${new Date()}</p>
      </div>
    `;
    transactionContainer.append(newHistory);
  } else {
    alert("Invalid Pin!");
    return;
  }
});
