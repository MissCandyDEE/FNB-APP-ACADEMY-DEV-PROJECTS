const wisdom = {
    kemet: "Truth is the measurement of the soul. In code, as in life, precision is the path to order.",
    vessel: "A system is only as strong as the container that holds it. Build your structures before your features.",
    force: "Efficiency is not about speed; it is about the elegant removal of the unnecessary."
};

function reveal(path) {
    const display = document.getElementById('wisdom-display');
    
    // Add a fade effect
    display.style.opacity = 0;
    
    setTimeout(() => {
        display.innerHTML = `<p>"${wisdom[path]}"</p>`;
        display.style.opacity = 1;
    }, 300);
}

// Ensure the smooth fade transition
document.getElementById('wisdom-display').style.transition = "opacity 0.5s ease";