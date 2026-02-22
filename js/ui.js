// UI utility functions

// Make delete function globally available
window.deleteDish = function(id) {
    console.log('Attempting to delete dish with id:', id);
    
    if (!id) {
        console.error('No id provided for deletion');
        return;
    }
    
    if (confirm('Remove this dish from the kingdom?')) {
        try {
            // Get existing dishes
            let dishes = JSON.parse(localStorage.getItem('bangolaDishes')) || [];
            console.log('Before deletion:', dishes.length, 'dishes');
            
            // Filter out the dish with matching id
            const newDishes = dishes.filter(dish => dish.id != id);
            console.log('After deletion:', newDishes.length, 'dishes');
            
            // Save back to localStorage
            localStorage.setItem('bangolaDishes', JSON.stringify(newDishes));
            
            // Refresh the display
            if (typeof renderLocalDishes === 'function') {
                renderLocalDishes('local-dishes-home');
            }
            
            // Also refresh on add-dish page if that container exists
            if (document.getElementById('recently-added-dishes')) {
                loadRecentlyAdded();
            }
            
            console.log('Dish removed successfully');
        } catch (error) {
            console.error('Error deleting dish:', error);
            alert('Error removing dish. Please try again.');
        }
    }
};

function createDishCard(dish) {
    const card = document.createElement('div');
    card.className = 'food-card';
    card.setAttribute('data-id', dish.id);
    
    // Format price with currency
    let priceDisplay = '';
    switch(dish.currency) {
        case 'BTC':
            priceDisplay = `₿ ${dish.price} BTC`;
            break;
        case 'KES':
            priceDisplay = `KSh ${dish.price}`;
            break;
        case 'ZAR':
            priceDisplay = `R ${dish.price}`;
            break;
        case 'USD':
            priceDisplay = `$${dish.price} USD`;
            break;
        case 'NGN':
            priceDisplay = `₦ ${dish.price}`;
            break;
        case 'GHS':
            priceDisplay = `₵ ${dish.price}`;
            break;
        default:
            priceDisplay = `$${dish.price}`;
    }
    
    card.innerHTML = `
        <h3>${dish.name || 'Untitled Dish'}</h3>
        <p class="dish-description">${dish.description || 'No description available'}</p>
        <p class="dish-occasion"><small>Occasion: ${dish.occasion || 'Any'}</small></p>
        <p class="dish-tradition"><small>Tradition: ${dish.tradition || 'Various'}</small></p>
        <span class="price">${priceDisplay}</span>
        <button onclick="deleteDish(${dish.id})" class="delete-btn">Remove</button>
    `;
    
    return card;
}

function renderLocalDishes(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.log('Container not found:', containerId);
        return;
    }
    
    container.innerHTML = ''; // Clear container
    
    try {
        const dishes = JSON.parse(localStorage.getItem('bangolaDishes')) || [];
        console.log('Rendering dishes:', dishes.length, 'dishes found');
        
        if (dishes.length === 0) {
            container.innerHTML = '<p class="no-dishes">🍽️ 0 dishes saved. Be the first to add a taste of the kingdom!</p>';
            return;
        }
        
        // Sort by newest first (assuming id is timestamp)
        dishes.sort((a, b) => b.id - a.id);
        
        dishes.forEach(dish => {
            const card = createDishCard(dish);
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading dishes:', error);
        container.innerHTML = '<p class="no-dishes">Error loading dishes. Please refresh the page.</p>';
    }
}