window.onload = function () {
    // ==============================
    // DARK MODE TOGGLE FUNCTIONALITY
    // ==============================

    // Grab the dark mode toggle button
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Add an event listener to the button to toggle the "dark-mode" class on the body
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        // Note: The CSS for 'dark-mode' should change the appearance to dark mode
    });

    // combine Korean vowel and cosonant and make as a complete letter


    const consonant = document.querySelectorAll('.consonantInput');
    const vowel = document.querySelectorAll('.vowelInput');

    let selectedConsonant = '';
    let selectedVowel = '';

    // get data from the consonanat button
    consonant.forEach(button => {
        button.addEventListener('click', () => {
            selectedConsonant = button.getAttribute('data-value');
            updateCombinationResult();
        });
    });

    // get data from the vowel button        
    vowel.forEach(button => {
        button.addEventListener('click', () => {
            selectedVowel = button.getAttribute('data-value');
            updateCombinationResult();
        });
    });
    // combine vowel and consonant through unicode
    function updateCombinationResult() {
        if (selectedConsonant && selectedVowel) {
            const combinedSyllable = String.fromCharCode(
                (selectedConsonant.charCodeAt(selectedConsonant) + selectedVowel.charCodeAt(selectedVowel) - 8801) * 28 + 44032 + (selectedConsonant.charCodeAt(selectedConsonant) - 4352) * 560
            );
            display.textContent = combinedSyllable;
        } else {
            display.textContent = 'Please select a consonant and a vowel.';
        }
    }
}
