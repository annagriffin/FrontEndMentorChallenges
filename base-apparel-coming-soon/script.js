const email = document.getElementById('email');
const form = document.getElementById('input');

const emailError = document.getElementById('email-error');

form.addEventListener('submit', (e) => {
    let emailValidation = /^([\w\.-]+)@([a-z\d-]+).([a-z\d-]{2,8})(\.[a-z]{2,8})?$/;

    if (email.value === '' || email.value == null) {
        emailError.innerText = 'Email cannot be empty';
        email.style.backgroundImage = 'url(images/icon-error.svg)';
        email.style.backgroundRepeat = 'no-repeat';
        email.style.backgroundPosition = 'right 8em bottom 50%';
        email.style.border = 'solid 1px var(--soft-red)';
    } else if (!emailValidation.test(email.value)) {
        emailError.innerText = "Please provide a valid email";
        email.style.backgroundImage = 'url(images/icon-error.svg)';
        email.style.backgroundRepeat = 'no-repeat';
        email.style.backgroundPosition = 'right 8em bottom 50%';
        email.style.border = 'solid 1px var(--soft-red)';

    }

    e.preventDefault();
})
