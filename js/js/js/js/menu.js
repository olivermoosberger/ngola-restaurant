* Functionality related to the menu page of the Bangola Community Restaurant app. This includes rendering the list of dishes, showing dish details, and managing user interactions specific to the menu page.
   document.addEventListener('DOMContentLoaded', function() {
        renderLocalDishes(document.getElementById('local-dishes-menu'));
        setActiveNav('menu.html');
        console.log('Menu page loaded - Bangola Kingdom Restaurant.');
    });