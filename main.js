let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirm");
let button = document.getElementById("button");
let infotext = document.getElementById("text");

function check() {
  if (
    password.value != "" &&
    confirmpassword.value != "" &&
    password.value == confirmpassword.value
  ) {
    console.log("match");
    infotext.textContent = "";
    password.style.cssText = "border-color: #e5e7eb;";
    confirmpassword.style.cssText = "border-color: #e5e7eb;";
  } else if (password.value == "" || confirmpassword.value == "") {
    infotext.textContent = "Password fields can not be empty!";
    password.style.cssText = "border-color: rgb(189, 4, 4);";
    confirmpassword.style.cssText = "border-color: rgb(189, 4, 4);";
  } else if (
    password.value != "" &&
    confirmpassword.value != "" &&
    password.value != confirmpassword.value
  ) {
    infotext.textContent = "Passwords do not match!";
    password.style.cssText = "border-color: rgb(189, 4, 4);";
    confirmpassword.style.cssText = "border-color: rgb(189, 4, 4);";
  }
}

button.addEventListener("click", check);
