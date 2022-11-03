const diceInput = document.getElementById('diceSides');
const diceResult = document.getElementById('resultOutput');
const rollDice = document.getElementById('rollDice');


var diceSidesAmount = diceInput.value

rollDice.onclick = function rollDice(){
    let sides = diceInput.value;
    var randomNumber = Math.ceil(Math.random() * sides);
    diceResult.innerText = randomNumber;
    
}
