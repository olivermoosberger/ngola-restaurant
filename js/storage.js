/**
 * Storage functions for managing dishes in localStorage
 */

// Load dishes from localStorage
export function loadDishes() {
    try {
        const dishes = localStorage.getItem('dishes');
        return dishes ? JSON.parse(dishes) : [];
    } catch (error) {
        console.error('Error loading dishes:', error);
        return [];
    }
}

// Save a new dish
export function saveDish(dish) {
    try {
        const dishes = loadDishes();
        dishes.push(dish);
        localStorage.setItem('dishes', JSON.stringify(dishes));
        return true;
    } catch (error) {
        console.error('Error saving dish:', error);
        return false;
    }
}

// Delete a dish by index
export function deleteDish(index) {
    try {
        const dishes = loadDishes();
        dishes.splice(index, 1);
        localStorage.setItem('dishes', JSON.stringify(dishes));
        return true;
    } catch (error) {
        console.error('Error deleting dish:', error);
        return false;
    }
}

// Update a dish
export function updateDish(index, updatedDish) {
    try {
        const dishes = loadDishes();
        dishes[index] = updatedDish;
        localStorage.setItem('dishes', JSON.stringify(dishes));
        return true;
    } catch (error) {
        console.error('Error updating dish:', error);
        return false;
    }
}