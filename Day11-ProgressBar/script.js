// DOM Elements
const progressBar = document.getElementById('progressBar');
const progressInput = document.getElementById('progressInput');
const progressValue = document.getElementById('progressValue');
const animateBtn = document.getElementById('animateBtn');

// Function to calculate color based on progress (0 to 100)
function getProgressColor(progress) {
    // Interpolate from green (120°) to red (0°) in HSL
    const hue = 120 - (120 * progress) / 100; // 120° (green) to 0° (red)
    return `hsl(${hue}, 100%, 50%)`;
}

// Update progress bar manually
progressInput.addEventListener('input', () => {
    const value = progressInput.value;
    progressBar.style.width = `${value}%`;
    progressBar.style.backgroundColor = getProgressColor(value); // Update color
    progressValue.textContent = `${value}%`;
});

// Auto-animate progress bar
animateBtn.addEventListener('click', () => {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        progressBar.style.backgroundColor = getProgressColor(progress); // Update color
        progressValue.textContent = `${progress}%`;
        progressInput.value = progress;

        if (progress >= 100) {
            clearInterval(interval);
            progressValue.textContent = "Done! ✅";
        }
    }, 50); // Adjust speed (lower = faster)
});