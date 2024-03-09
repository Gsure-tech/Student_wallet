//  This page is for getter and setter
// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };
  
  // Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;


const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };
  
  // Set an object property using a setter:
  person1.lang = "en";
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = person1.language;