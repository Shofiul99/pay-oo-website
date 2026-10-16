document.getElementById("add-money-btn").addEventListener("click", () => {
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount === "Select Bank") {
    alert("Select Bank Account");
    return;
  }

  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("Invalid Number!");
    return;
  }

  const amount = getValueFromInput("add-money-amount");
  const newBalance = getCurrentBalance() + Number(amount);

  const pin = getValueFromInput("add-money-pin");
  if (pin === "1234") {
    alert("Money Added Successfully");
    setBalance(newBalance);

    const transactionContainer = document.getElementById(
      "transaction-conatiner",
    );
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
      <div class="bg-base-100 w-full shadow rounded-2xl p-5">
          <p>Bank: ${bankAccount}</p><br>
          <p>Account No: ${accno}</p>
          <p>Recived Amount: ${amount}</p><br>
          <p>Time: ${new Date()}</p>
      </div>
    `;
    transactionContainer.append(newHistory);
  } else {
    alert("Invalid Pin!");
    return;
  }
});
