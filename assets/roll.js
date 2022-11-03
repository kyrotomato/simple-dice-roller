const diceInput = document.getElementById('diceSides');
const diceResult = document.getElementById('resultOutput');
const rollDice = document.getElementById('rollDice');
const d4 = document.getElementById('d4');
const d6 = document.getElementById('d6');
const d8 = document.getElementById('d8');
const d10 = document.getElementById('d10');
const d12 = document.getElementById('d12');
const d20 = document.getElementById('d20');

var diceSidesAmount = diceInput.value

rollDice.onclick = function rollDice(){
    let sides = diceInput.value;
    var randomNumber = Math.ceil(Math.random() * sides);
    diceResult.innerText = randomNumber;
}
d4.onclick = function rollDice(){
    let sides = diceInput.value;
    var randomNumber = Math.ceil(Math.random() * 4);
    diceResult.innerText = randomNumber;
}
d6.onclick = function rollDice(){
    let sides = diceInput.value;
    var randomNumber = Math.ceil(Math.random() * 6);
    diceResult.innerText = randomNumber;
}
d8.onclick = function rollDice(){
    let sides = diceInput.value;
    var randomNumber = Math.ceil(Math.random() * 8);
    diceResult.innerText = randomNumber;
}
d10.onclick = function rollDice(){
    let sides = diceInput.value;
    var randomNumber = Math.ceil(Math.random() * 10);
    diceResult.innerText = randomNumber;
}
d12.onclick = function rollDice(){
    let sides = diceInput.value;
    var randomNumber = Math.ceil(Math.random() * 12);
    diceResult.innerText = randomNumber;
}
d20.onclick = function rollDice(){
    let sides = diceInput.value;
    var randomNumber = Math.ceil(Math.random() * 20);
    diceResult.innerText = randomNumber;
}