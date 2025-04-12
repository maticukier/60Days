const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lengthValueEl = document.getElementById('lengthValue');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+{}[]|:;"<>,.?/~`';

lengthEl.addEventListener('input', () => {
    lengthValueEl.textContent = lengthEl.value;
});

function generatePassword() {
    let chars = lowercaseChars;
    let password = '';

    if (uppercaseEl.checked) chars += uppercaseChars;
    if (numbersEl.checked) chars += numberChars;
    if (symbolsEl.checked) chars += symbolChars;

    for (let i = 0; i < lengthEl.value; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordEl.value = password;
}

function copyPassword() {
    passwordEl.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);

generatePassword();