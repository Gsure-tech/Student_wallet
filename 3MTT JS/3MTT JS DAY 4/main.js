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
    // counterResult.textContent = i++;
    counterResult.innerHTML = i++;
    // display.value = i++;
}
function decrement(){
    // counterResult.textContent = i--;
    // counterResult.innerHTML = "<b>This is  bold </b>"
    counterResult.innerHTML = i--;
    // display.value = i--;
}

function reset(){
    counterResult.innerHTML = 0;
    // counterResult.textContent = 0;
    // display.value = '';
}

// display.onclick = function(){
// display.value ='Testing display'
// }


// Accept Input from user via html
const age = document.getElementsByClassName('age');
const myLabel = document.getElementById('myLabel');
const username = document.getElementById('username');
const mySubmit = document.getElementById('mySubmit')

mySubmit.onclick = 
function accept(){
    let yourAge = Number(age.value);
    console.log(yourAge)

    let yourUsername = username.value;
    console.log(yourUsername);

// (yourAge < 18) ? myLabel.textContent = `${yourUsername} you are qualified to cast your vote`:
// myLabel.textContent = `${yourUsername} you are not qualified to cast your vote`;


    if(yourAge >= 18 ){
        myLabel.textContent = `${yourUsername} you are qualified to cast your vote`;
    } else{
        myLabel.textContent = `${yourUsername} you are not qualified to cast your vote`; 
    }
}


// show password
const open = document.getElementById('open')
const close = document.getElementById('close')
const password = document.getElementById('possword')





