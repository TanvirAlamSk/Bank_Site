const mail = document.getElementById("mail");
const password = document.getElementById("password");
const submetButton = document
  .getElementById("submet-button")
  .addEventListener("click", function () {
    if (mail.value == "ta@gmail.com" && password.value == 12345) {
      window.location.href = "Cusps-Bank-Dashboard.html";
    } else if (mail.value == "" && password.value == "") {
      alert("You can not insert any value");
    } else {
      alert("Your mail or password is not correct");
    }
    mail.value = "";
    password.value = "";
  });

//   dahsh board
