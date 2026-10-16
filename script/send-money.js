document.getElementById("send-money-btn").addEventListener("click", () => {
  const accno = getValueFromInput("send-money-number");
  if (accno.length != 11) {
    alert("Invalid Number!");
    return;
  }

  const amount = getValueFromInput("sned-money-amount");
  const newBalance = getCurrentBalance() - Number(amount);
  if (newBalance < 0) {
    alert("Enter a valid amount.");
    return;
  }

  const pin = getValueFromInput("send-money-pin");
  if (pin === "1234") {
    alert("Money send successfully");
    setBalance(newBalance);

    const transactionContainer = document.getElementById(
      "transaction-conatiner",
    );
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
      <div class="bg-base-100 w-full shadow rounded-2xl p-5">
          <p>Send to: ${accno}</p><br>
          <p>Amount: ${amount}</p><br>
          <p>Time: ${new Date()}</p>
      </div>
    `;
    transactionContainer.append(newHistory);
  } else {
    alert("Enter a valid pin number.");
    return;
  }
});
