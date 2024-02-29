// alert("hi");

const clickme = document.getElementById('clickme');
const display = document.getElementById('display');
const clickme2 = document.querySelector('#clickme2');
const counterResult = document.querySelector('#counterResult');

clickme.onclick = function(){
    // alert("I have been clicked");
    display.value ='Testing display'
}

clickme.addEventListener('click', function(){
    display.value = i++;
})

clickme2.addEventListener('click', function(){
    display.value = '';
})

// Counter
// const increment 

let i =0;
function increment(){
    counterResult.textContent = i++;
    // display.value = i++;
}
function decrement(){
    counterResult.textContent = i--;
    // display.value = i--;
}

function reset(){
    counterResult.textContent = 0;
    // display.value = '';
}

// display.onclick = function(){
// display.value ='Testing display'
// }



