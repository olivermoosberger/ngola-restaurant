// Storage utility for localStorage - NO EXPORT STATEMENTS
function loadDishes() {
    try {
        const dishes = localStorage.getItem('bangolaDishes');
        return dishes ? JSON.parse(dishes) : [];
    } catch (error) {
        console.error('Error loading dishes:', error);
        return [];
    }
}


function saveDish(dish) {
    try {
        const dishes = loadDishes();
      
        dish.id = Date.now();
        dish.dateAdded = new Date().toISOString();
        dishes.push(dish);
        localStorage.setItem('bangolaDishes', JSON.stringify(dishes));
        return true;
    } catch (error) {
        console.error('Error saving dish:', error);
        return false;
    }
}


function deleteDish(index) {
    try {
        const dishes = loadDishes();
        dishes.splice(index, 1);
        localStorage.setItem('bangolaDishes', JSON.stringify(dishes));
        return true;
    } catch (error) {
        console.error('Error deleting dish:', error);
        return false;
    }
}