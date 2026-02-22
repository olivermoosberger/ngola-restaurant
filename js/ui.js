// UI utility functions
function createDishCard(dish) {
    const card = document.createElement('div');
    card.className = 'food-card';
    card.setAttribute('data-id', dish.id);
    
    // Format price display based on currency type
    let priceDisplay = '';
    if (dish.currency === 'BTC') {
        priceDisplay = `₿ ${dish.price} BTC`;
    } else if (dish.currency === 'KES') {
        priceDisplay = `KSh ${dish.price}`;
    } else if (dish.currency === 'ZAR') {
        priceDisplay = `R ${dish.price}`;
    } else {
        priceDisplay = `$${dish.price} USD`;
    }
    
    card.innerHTML = `
        <h3>${dish.name || 'Untitled Dish'}</h3>
        <p class="dish-description">${dish.description || 'No description available'}</p>
        <p class="dish-occasion"><small>Occasion: ${dish.occasion || 'Any'}</small></p>
        <p class="dish-tradition"><small>Tradition: ${dish.tradition || 'Various'}</small></p>
        <span class="price">${priceDisplay}</span>
        <button onclick="deleteDishFromUI(${dish.id})" class="delete-btn">Remove</button>
    `;
    
    return card;
}

// Global delete function
window.deleteDishFromUI = function(id) {
    if (confirm('Remove this dish from the kingdom?')) {
        deleteDish(id);
        renderLocalDishes('local-dishes-home');
    }
};

function renderLocalDishes(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = ''; // Clear container
    
    const dishes = loadDishes();
    
    if (dishes.length === 0) {
        container.innerHTML = '<p class="no-dishes">🍽️ 0 dishes saved. Be the first to add a taste of the kingdom!</p>';
        return;
    }
    
    // Sort by newest first
    dishes.sort((a, b) => b.id - a.id);
    
    dishes.forEach(dish => {
        const card = createDishCard(dish);
        container.appendChild(card);
    });
}