// Home page specific functionality

function renderDishes() {
    renderLocalDishes('local-dishes-home');
}

function setActiveNav(page) {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Home page loaded - Bangola Kingdom Restaurant.');
    
    // Check if we're on the home page
    if (document.getElementById('local-dishes-home')) {
        renderDishes();
    }
    
    setActiveNav('index.html');
});