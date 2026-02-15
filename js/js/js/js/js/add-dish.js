* Functionality for add-dish 
page of the Bangola Community Restaurant app. This includes handling the form submission for adding a new dish, validating the input, and saving the new dish to localStorage.
   
import { addDish } from './storage.js';
import { setActiveNav } from './ui.js'; 
document.addEventListener('DOMContentLoaded', function() {
    
    renderLocalDishes(document.getElementById('local-dishes-add'));
    setActiveNav('add-dish.html');
    
initFormHandler(); 
});

* sets up form submission with
function initFormHandler() {
    const form = document.getElementById('add-dish-form');
    if (!form) return; 
    form.addEventListener('submit', handleFormSubmit);
}

*validates and processes the form submission for adding a new dish.
function handleFormSubmit(event) {
    event.preventDefault();
    const nameInput = document.getElementById('dish-name');
    const originInput = document.getElementById('origincountry');
    const descriptionInput = document.getElementById('dishdescription');
    const priceInput = document.getElementById('dish-price');
    const feedback = document.getElementById('form-feedback');

    feedback.innerHTML = '';
    let hasError = false;

    let name = nameInput.value.trim();
    let origin = originInput.value.trim() || 'African';
    let description = descriptionInput.value.trim();
    let price = parseFloat(priceInput.value.trim());
    if (!name) {
        feedback.innerHTML += '<p style="color:red;">Dish name is required.</p>';
        hasError = true;
    }
    if (!description) {
        feedback.innerHTML += '<p style="color:red;">Dish description is required.</p>';
        hasError = true;
    } else if (description.length < 10) {
        feedback.innerHTML += '<p style="color:red;">Description must be at least 10 characters long.</p>';
        hasError = true;
    }   
    if (priceInput.value.trim() === '') {
        feedback.innerHTML += '<p style="color:red;">Dish price is required.</p>';
        hasError = true;
    } else if(!price.matches(/^\d+(\.\d{1,2})?$/)) {
        feedback.innerHTML += '<p style="color:red;">Price must be a valid number (up to 2 decimal places).</p>';
        hasError = true;
    }
    if (hasError) {
        const newDish = {
            name: name,
            origin: origin,
            description: description,
            price: price,
            dateAdded: new Date().toLocaleDateString()
        };
        
        // save the new dish to localStorage
        addDish(newDish);
        feedback.innerHTML = '<p style="color:green;">Dish added successfully!</p>';
        form.reset();
        originInput.value = 'African';

        // update preview
        renderLocalDishes(document.getElementById('recently-added-grid'));
    console.log('New dish added:', name, origin, description, price);
    
    }
    } 