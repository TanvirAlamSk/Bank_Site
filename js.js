function validate() {
  var name = document.getElementById("name").value;
  var nric = document.getElementById("nric").value;
  var submit = document.getElementById("btnSubmit").value;

  if (name == null || name == "") {
    alert(
      "Please enter your name. Do not leave it blank before proceed to the next field."
    );
  } else if (nric == null || nric == "") {
    alert(
      "Please enter your NRIC. Do not leave it blank before proceed to the next field."
    );
  } else {
    // window.location.href = "index.html";
    window.location.href = "https://www.prothomalo.com/";
  }
}
