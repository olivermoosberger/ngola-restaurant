* Functionality specific to the home page can be added here. For example, you can add event listeners for buttons or initialize any components that are only relevant to the home page.

     document.addEventListener('DOMContentLoaded', function() {

        renderLocalDishes(document.getElementById('local-dishes-home'));
        }); 
 
        setActiveNav('index.html');

        console.log('Home page loaded - Bangola Kingdom Restaurant.');
    });     