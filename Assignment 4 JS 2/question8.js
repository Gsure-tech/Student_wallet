 /**
 Write a function called createList that takes an array of items as a parameter and dynamically creates an unordered list (UL) in the DOM with each item as a list item (LI).
  **/

function createList(items) {
  const ul = document.createElement("ul");
  ul.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  document.body.appendChild(ul);
}

// Example

let items = ["Item 1", "Item 2", "Item 3"];
createList(items);
