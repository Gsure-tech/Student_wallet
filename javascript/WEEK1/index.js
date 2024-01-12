// Get acces to the button
const button = document.querySelector('button');

// Add event listener to the buton
button.addEventListener('click', showMyName);

// Function to show my name
function showMyName(){
    alert('My name is AbdulGaniyu');
}
let message = "Hello my friends\n My name is Aisha\n I am a Medical Doctor"
alert(message.toUpperCase())

let user2 ={
    name: "John Doe",
    age :20,
    weight:20.3,
    "verifiedUser" : false
}

let user ={
    name: "John Doe",
    age: 20,
    weight:20.3,
    verifiedUser: true
}
let firstName = `Sani`
let lastName = `Bello`
let fullName = `Mr ${firstName} ${lastName}`

alert(fullName)

console.log(user)
console.log(message.startsWith("Hello"))
console.log(user2.verifiedUser);