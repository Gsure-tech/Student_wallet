

const rollDice = () =>{

const numOfDice = document.getElementById('numOfDice').value;
const diceResult = document.getElementById('diceResult');
const diceImage = document.getElementById('diceImage');

const values = [];
const images =[];


    for(var i=0; i<numOfDice; i++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        images.push(`<img src="assets/dice_${value}.png">`)
    }

    diceResult.textContent = `Dice:  ${values.join(', ')}`;
    diceImage.innerHTML = images.join('');
}

const rollD = document.getElementById('numOfDice');
// rollD.addEventListener