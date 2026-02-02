document.addEventListener("DOMContentLoaded", function() {
    // Function to hide the loading overlay and show content
    function hideLoaderAndShowContent() {
        const loadingOverlay = document.getElementById('loading');
        const nav = document.getElementById('nav')
        // Hide the loading overlay
        loadingOverlay.style.display = 'none';
        nav.style.display = 'block'
    }

    // Keep the spinner spinning for 2 seconds, then execute the function
    setTimeout(hideLoaderAndShowContent, 0); // 2000 milliseconds = 2 seconds
});