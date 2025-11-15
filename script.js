document.getElementById('themeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Change button text based on mode
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = "☀️ Bright Mode";
    } else {
        this.textContent = "🌙 Dark Mode";
    }
});

