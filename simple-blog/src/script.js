// Get the checkbox and body element
const toggleSlider = document.getElementById('toggle-slider');
const body = document.body;
const paragraph = document.querySelector('p');

// Set initial mode based on user's preference or default to dark mode
if (localStorage.getItem('theme') === 'light') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    paragraph.classList.add('light-mode');
    toggleSlider.checked = true; // Set slider to checked
} else {
    body.classList.add('dark-mode');
    paragraph.classList.add('dark-mode');
    toggleSlider.checked = false; // Set slider to unchecked
}

// Toggle function
toggleSlider.addEventListener('change', () => {
    if (toggleSlider.checked) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        paragraph.classList.remove('dark-mode');
        paragraph.classList.add('light-mode');
        localStorage.setItem('theme', 'light'); // Store preference in local storage
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        paragraph.classList.remove('light-mode');
        paragraph.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Store preference in local storage
    }
});
