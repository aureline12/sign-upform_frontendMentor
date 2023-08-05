const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitForm = document.getElementById('submitForm');

const error_fname = document.getElementById('error_fname');
const error_lname = document.getElementById('error_lname');
const error_email = document.getElementById('error_email');
const error_password = document.getElementById('error_password');

const inputStyle = (el) => {
    el.style.borderColor = 'hsl(0, 100%, 74%) '; 
    el.style.background = 'url(../images/icon-error.svg) no-repeat center right';
    return el;
}

const inputErrorStyle = (el) => {
    el.style.color = 'hsl(0, 100%,74%)';
    el.style.float = 'right';
    el.style.marginBottom = '1rem'
    return el;
}

submitForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log(email , email.type);
    if (fname.value === '') {
        error_fname.innerHTML = 'First Name cannot be empty';
        inputStyle(fname);
        inputErrorStyle(error_fname)
    }
    if (lname.value === '') {
        error_lname.innerHTML = 'Last Name cannot be empty';
        inputStyle(lname);
        inputErrorStyle(error_lname)
    }
    if (email.value.indexOf('@') == -1 || email.value.substr(email.value.indexOf('@')).match(/^/)) {
        error_email.innerHTML = 'Looks like this is not an email';
        inputStyle(email);
        inputErrorStyle(error_email)
    }
    if (password.value === '') {
        error_password.innerHTML = 'Password cannot be empty';
        inputStyle(password);
        inputErrorStyle(error_password)
    }
  });
