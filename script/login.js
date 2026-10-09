console.log("Functionality comming soom....");

document.getElementById("login-btn").addEventListener("click", () => {
  const inputNumber = document.getElementById("input-number");
  const contactNumber = inputNumber.value;
  console.log(contactNumber);

  const inputPin = document.getElementById("input-pin");
  const pinNumber = inputPin.value;
  console.log(pinNumber);

  if(contactNumber === "01234567890" && pinNumber === "1234") {
    alert("Loged in Succesfully.......");
    window.location.assign("/home.html");
  } else {
    alert("Failed to login.........");
    return;
  }
});
