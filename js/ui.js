// UI utility functions - NO IMPORT STATEMENTS
function createDishCard(dish, index) {
    const card = document.createElement('div');
    card.className = 'food-card';
    
    card.innerHTML = `
        <h3>${dish.name || 'Untitled Dish'}</h3>
        <p>${dish.description || 'No description available'}</p>
        <p><small>Country: ${dish.country || 'Unknown'}</small></p>
        <span class="price">$${dish.price || '0.00'}</span>
        ${index !== undefined ? 
    
    return card;
}

function renderLocalDishes(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = ''; // Clear container
    
    const dishes = loadDishes();
    
    if (dishes.length === 0) {
        container.innerHTML = '<p class="no-dishes">0 dishes saved. Click "Add Dish" to add one!</p>';
        return;
    }
    
    dishes.forEach((dish, index) => {
        const card = createDishCard(dish, index);
        container.appendChild(card);
    });
}