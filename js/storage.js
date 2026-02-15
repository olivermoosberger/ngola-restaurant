

* * storage.js
* Handles saving and loading dishes to/from localStorage.
*/

const STORAGE_KEY = 'bangola-community-dishes';
 
* Saves the given dishes array to localStorage.

export function saveDishes(dishes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dishes));
}

console .log('Dishes saved to localStorage:',dishes.length, 'items');
catch (error) {
  console.error('Error saving dishes to localStorage:', error);
} 

* Takes dishes from localStorage and returns them as an array. If no dishes are found, returns an empty array.

export function loadDishes() { try {
  const dishes = localStorage.getItem(STORAGE_KEY);
  return dishes ? JSON.parse(dishes) : [];
} catch (error) {
  console.error('Error loading dishes from localStorage:', error);
  return [];
}

* Adds a new dish to localStorage
* @param {Object} dish - The dish object to add.
* @returns {Array} The updated array of dishes after adding the new dish.

export function addDish(dish) {
  const dishes = loadDishes();
  const updatedDishes = [...dishes, dish];
  saveDishes(updatedDishes);
    return updatedDishes;
}