const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateColor() {
    const randomColor = generateRandomColor();
    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
    adjustTextColor(randomColor);
}

function adjustTextColor(hexColor) {
    const rgb = hexToRgb(hexColor);
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    if (brightness < 128) {
        colorCode.style.color = '#FFFFFF'; 
    } else {
        colorCode.style.color = '#000000'; 
    }
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function copyColorCode() {
    navigator.clipboard.writeText(colorCode.textContent)
        .then(() => {
            alert('Color code copied to clipboard!');
        })
        .catch(() => {
            alert('Failed to copy color code.');
        });
}

generateBtn.addEventListener('click', updateColor);
copyBtn.addEventListener('click', copyColorCode);

updateColor();