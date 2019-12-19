const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('signup');

const firstnameError = document.getElementById('firstname-error');
const lastnameError = document.getElementById('lastname-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');


form.addEventListener('submit', (e) => {

    if (firstname.value === '' || firstname.value == null) {
        firstnameError.innerText = 'First Name cannot be empty';
        addErrorIcon(firstname);
    }

    if (lastname.value === '' || lastname.value == null) {
        lastnameError.innerText = 'Last Name cannot be empty';
        addErrorIcon(lastname);

    }

    let emailValidation = /^([\w\.-]+)@([a-z\d-]+).([a-z\d-]{2,8})(\.[a-z]{2,8})?$/;

    if (email.value === '' || email.value == null) {
        emailError.innerText = 'Email cannot be empty';
        addErrorIcon(email);
    } else if (!emailValidation.test(email.value)) {
        emailError.innerText = "Looks like this is not an email";
        addErrorIcon(email);
    }

    if (password.value == '' || password.value == null) {
        passwordError.innerText = 'Password cannot be empty';
        addErrorIcon(password);
    } else if (password.value.length <= 8) {
        passwordError.innerText = 'Password must be at least 8 characters';
        addErrorIcon(password);
    }

    e.preventDefault();
})


function addErrorIcon(element) {
    element.style.backgroundImage = 'url(images/icon-error.svg)';
    element.style.backgroundRepeat = 'no-repeat';
    element.style.backgroundPosition = '97%';
}