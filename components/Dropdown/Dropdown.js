// Step 3: Define our class that will create a new object
class Dropdown {
  // Constructor portion
  constructor(element) {
    // Assign this.element to the dropdown element [DONE]
    this.element = element;
    console.log('this.element', this.element)
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context) [DONE]
    this.button = this.element.querySelector('.dropdown-button');
    console.log('this.button', this.button);
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.dropdownContent = this.element.querySelector('.dropdown-content'); // Will toggle .dropdown-hidden on and off this div
    console.log('this.dropdownContent', this.dropdownContent);
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent())
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.dropdownContent.classList.toggle('dropdown-hidden');
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class

// Step 1: Get the DOM elements that we are adding an event listener to and add them to the variable 'dropdowns'
// Step 2: Iterate over the NodeList and create a new object

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

// dropdowns is a variable that is assigned to a nodelist that takes all of the elements in the div class .dropdown and runs a forEach statement on it, creating a new instance of the Dropdown class
