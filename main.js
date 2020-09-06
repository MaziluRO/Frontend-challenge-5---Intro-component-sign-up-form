const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});


function checkInputs() {
  const firstNameValue = firstName.value.trim(); //removes whitespace
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === '') {
    //add error class
    //show error icon
    setError(firstName, 'First Name cannot be empty');
  } else {
    //add success class
    setSuccess(firstName);
  }

  if (lastNameValue === '') {
    //add error class
    //show error icon
    setError(lastName, 'Last Name cannot be empty');
  } else {
    //add success class
    setSuccess(lastName);
  }

  if (emailValue === '') {
    //add error class
    //show error icon
    setError(email, 'Email cannot be empty');
  } else if (!emailValid(emailValue)) {
    setError(email, 'Looks like this is not an email')
  } else {
    //add success class
    setSuccess(email);
  }



  if (passwordValue === '') {
    //add error class
    //show error icon
    setError(password, 'Password cannot be empty');
  } else {
    //add success class
    setSuccess(password);
  }

}


function setError(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector('small');

  //add error message 
  small.innerText = message;

  //add error class 
  formControl.className = 'form-control error';
}

function setSuccess(input) {
  const formControl = input.parentElement;

  //add success class
  formControl.className = 'form-control success';
}

function emailValid(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}