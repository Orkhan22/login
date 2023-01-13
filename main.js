// const formq = document.querySelector("#form")
// const email =document.querySelector("#email")
// const password =document.querySelector("#password")
// const submit =document.querySelector("#submit")
// const emailerror =document.querySelector(".ad-error");
const email = document.querySelector("#email").value;
const pass = document.querySelector("#password").value;
const regex =
  /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;
const pss = /^[a-zA-Z0-9]{8,12}$/;
const mailregex = regex.test(email.value);
const psreg = pss.test(pass.value);

function submit() {
  if (email.value === "") {
    alert("Emailinizi daxil edin");
  } else if (pass.value === "") {
    alert("Şifrənizi daxil edin");
  } else if (regex.test(email)) {
    alert("Duzgun email daxil edin");
  } else if (pss.test(pass)) {
    alert("Şifre minimum 8 simvoldan ibaret ola biler");
  } else {
    alert("Xos gelibsiniz!");
    window.location = "account.html";
  }
}

function refresh() {
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
}
