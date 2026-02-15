* UI-related functions for displaying and managing dishes in the Bangola Community Restaurant app.
* This  handles rendering dishes, showing dish details, and managing user interactions with the UI.
import { loadDishes } from './storage.js';

* Renders the list of dishes on the page.   
export function renderDishes() {
  const dishes = loadDishes();
  const dishesContainer = document.getElementById('dishes-container');
  dishesContainer.innerHTML = '<p style=color:gray;>No dishes available. Please add a dish.</p>';
   return;
}
let dishesHTML = '';
  dishes.forEach((dish, index) => {
    dishesHTML += `<div class="dish-card" data-index="${index}">
      <h3>${dish.name}</h3>
      <p>${dish.description}</p>
      <button class="view-details-btn">View Details</button>
    </div>`;
  });
  dishesContainer.innerHTML = dishesHTML;
}

* Add event listeners to the "View Details" buttons for each dish card.
document.querySelectorAll('.view-details-btn').forEach(button => {
  button.addEventListener('click', (event) => {
    const index = event.target.getAttribute('data-index');
    showDishDetails(index);
  });
});

* Displays the details of a dish in a modal or separate section.
export function showDishDetails(index) {
    console.log('Showing details for dish index:', index);
    const dishes = loadDishes();
    const dish = dishes[index];
 
*sets active state for navigation <div class="card">
export function setActiveNav(currentPage) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}