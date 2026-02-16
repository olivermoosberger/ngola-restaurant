/**
 *  Handles rendering dishes, showing dish details, and managing user interactions with the UI.
 */
import { loadDishes } from './storage.js';

/**
 * Renders  list of dishes on the page.
 */
export function renderDishes() {
  const dishes = loadDishes();
  const dishesContainer = document.getElementById('dishes-container');
  
  // Checks if container exists
  if (!dishesContainer) {
    console.error('Dishes container not found');
    return;
  }
  
  // Handles empty dishes array
  if (!dishes || dishes.length === 0) {
    dishesContainer.innerHTML = '<p style="color: gray;">No dishes available. Please add a dish.</p>';
    return;
  }
  
  // Generate HTML for each dish
  let dishesHTML = '';
  dishes.forEach((dish, index) => {
    dishesHTML += `<div class="dish-card" data-index="${index}">
      <h3>${escapeHtml(dish.name)}</h3>
      <p>${escapeHtml(dish.description)}</p>
      <button class="view-details-btn" data-index="${index}">View Details</button>
    </div>`;
  });
  
  dishesContainer.innerHTML = dishesHTML;
  
  //  Event listeners 
  document.querySelectorAll('.view-details-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      showDishDetails(parseInt(index));
    });
  });
}

/**
 *  Details of a dish in a modal or separate section.
 * @param {number} index - The index of the dish to display
 */
export function showDishDetails(index) {
  console.log('Showing details for dish index:', index);
  const dishes = loadDishes();
  const dish = dishes[index];
  
  if (!dish) {
    console.error('Dish not found at index:', index);
    return;
  }
  
  //  show in a modal or alert
  alert(`Dish Details:
  
Name: ${dish.name}
Description: ${dish.description}
Country: ${dish.country || 'Not specified'}
Price: ${dish.price || 'Not specified'}`);
}

/**
 *  Active state for navigation links
 * @param {string} currentPage - The current page identifier (href value)
 */
export function setActiveNav(currentPage) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

/**
 * Helper function to escape HTML special characters to prevent XSS attacks
 * @param {string} text - The text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}