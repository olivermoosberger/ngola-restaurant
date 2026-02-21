// Add dish page functionality

document.addEventListener('DOMContentLoaded', function() {
    console.log('Add dish page loaded');
    
    const form = document.getElementById('add-dish-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const dish = {
                name: document.getElementById('dish-name')?.value || '',
                description: document.getElementById('dish-description')?.value || '',
                country: document.getElementById('dish-country')?.value || '',
                price: document.getElementById('dish-price')?.value || '',
                dateAdded: new Date().toISOString()
            };
            
            // Save dish
            if (typeof saveDish === 'function' && saveDish(dish)) {
                alert('Dish added successfully!');
                form.reset();
                // Redirect to home page after adding
                window.location.href = 'index.html';
            } else {
                alert('Error adding dish. Please try again.');
            }
        });
    }
    
    // Set active nav if function exists
    if (typeof setActiveNav === 'function') {
        setActiveNav('add-dish.html');
    } else {
        console.warn('setActiveNav function not found');
    }
});