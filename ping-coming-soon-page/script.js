const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const form = document.getElementById('email-input');

form.addEventListener('submit', (e) => {
    let emailValidation = /^([\w\.-]+)@([a-z\d-]+).([a-z\d-]{2,8})(\.[a-z]{2,8})?$/;

    if (email.value === '' || email.value == null) {
        emailError.innerText = 'Email cannot be empty';
        email.style.border = 'solid 1px var(--light-red)';
    } else if (!emailValidation.test(email.value)) {
        emailError.innerText = "Please provide a valid email";
        email.style.border = 'solid 1px var(--light-red)';

    }

    e.preventDefault();
})