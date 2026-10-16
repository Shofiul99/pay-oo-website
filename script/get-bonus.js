document.getElementById("get-bonus-btn").addEventListener("click", () => {
  const coupon = getValueFromInput("get-bonus-coupon");
  const newBalance = getCurrentBalance() + 500;
  if (coupon === "Payoo500") {
    alert("Congratualtion! You got the bonus.");
    setBalance(newBalance);

    const transactionContainer = document.getElementById(
      "transaction-conatiner",
    );
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
      <div class="bg-base-100 w-full shadow rounded-2xl p-5">
          <p>Recived Bonus: ${500}</p><br>
          <p>Time: ${new Date()}</p>
      </div>
    `;
    transactionContainer.append(newHistory);
  } else {
    alert("Worng Coupon.");
  }
});
