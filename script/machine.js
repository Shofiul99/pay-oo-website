function getValueFromInput (id) {
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