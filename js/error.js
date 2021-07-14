const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("pw");
const repassword = document.getElementById("pwcheck");

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([name, email, pw, pwcheck]);
  isValidName(username);
  isValidEmail(email);
  isValidPw(pw);
  checkPasswordsMatch(pw, pwcheck);
});

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

const notice = document.querySelector(".notice");

function allRequired() {
  notice.classList.add("show");
  setTimeout(() => {
    notice.classList.remove("show");
  }, 2000);
}
