// Make setActiveNav globally available
window.setActiveNav = function(page) {
    console.log('Setting active nav for:', page);
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    console.log('Current page:', currentPage);
    
    // Add active class to current page link
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            console.log('Activated link:', href);
        }
    });
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Home page loaded - Bangola Kingdom Restaurant.');
    
    // Set active navigation
    if (typeof setActiveNav === 'function') {
        setActiveNav();
    }
    
    // Load dishes if on home page
    if (document.getElementById('local-dishes-home')) {
        if (typeof renderLocalDishes === 'function') {
            renderLocalDishes('local-dishes-home');
        }
    }
});