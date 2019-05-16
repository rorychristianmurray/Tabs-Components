class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    console.log('this.element', this.element)
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    console.log('this.data', this.data);
    
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-link[data-tab="${this.data}"]`);
    console.log('this.itemElement', this.itemElement)
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // console.log('tabItem', tabItem);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select());

  };

  select() {
    // Get all of the elements with the tabs-link class
    let links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();


  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
    console.log('this.element tabItem', this.element)
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');
    console.log('items', items);
    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove('tabs-item-selected'))
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

// Select all classes named ".tabs-link" and assign that value to the links variable

const links = document.querySelectorAll('.tabs-link');
console.log('links variable', links);

// links is a variable that is assigned to the NodeList containing all of Tab buttons


//  With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
// In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

links.forEach(function(tablink) {
  console.log('tablink', tablink)
  return new TabLink(tablink)
})
