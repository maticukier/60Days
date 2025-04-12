const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(event) {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email format';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (confirmPasswordInput.value.trim() === '') {
        confirmPasswordError.textContent = 'Please confirm your password';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    } else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    if (!isValid) {
        event.preventDefault();
    }
}

form.addEventListener('submit', validateForm);