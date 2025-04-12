const progressBar = document.getElementById('progressBar');
const progressInput = document.getElementById('progressInput');
const progressValue = document.getElementById('progressValue');
const animateBtn = document.getElementById('animateBtn');

function getProgressColor(progress) {
    
    const hue = 120 - (120 * progress) / 100; 
    return `hsl(${hue}, 100%, 50%)`;
}

progressInput.addEventListener('input', () => {
    const value = progressInput.value;
    progressBar.style.width = `${value}%`;
    progressBar.style.backgroundColor = getProgressColor(value); 
    progressValue.textContent = `${value}%`;
});

animateBtn.addEventListener('click', () => {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        progressBar.style.backgroundColor = getProgressColor(progress); 
        progressValue.textContent = `${progress}%`;
        progressInput.value = progress;

        if (progress >= 100) {
            clearInterval(interval);
            progressValue.textContent = "Done! ✅";
        }
    }, 50); 
});