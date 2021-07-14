const nameValidation = /^[a-z0-9_-]{2,20}$/;
const emailValidation = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const pwValidation = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~,!,@,#,$,*,(,),=,+,_,.,|]).*$/;

function isValidName(input) {
  if (nameValidation.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Name is more than 2 characters");
  }
