function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}

function getCurrentBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  return Number(balance);
}

function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

function showOnly(id) {
  document.getElementById("add-money").classList.add("hidden");
  document.getElementById("cashout").classList.add("hidden");
  document.getElementById("send-money").classList.add("hidden");
  document.getElementById("get-bonus").classList.add("hidden");
  document.getElementById("pay-bill").classList.add("hidden");
  document.getElementById("transaction").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
