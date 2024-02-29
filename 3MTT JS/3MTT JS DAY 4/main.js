// alert("hi");

const clickme = document.getElementById('clickme');
const display = document.getElementById('display');

clickme.onclick = function(){
    // alert("I have been clicked");
    display.value ='Testing display'
}

// Counter
// const increment 

let i =0;
function increment(){
    display.value = i++;
}
function decrement(){
    display.value = i--;
}

function reset(){
    display.value = '';
}

// display.onclick = function(){
// display.value ='Testing display'
// }



