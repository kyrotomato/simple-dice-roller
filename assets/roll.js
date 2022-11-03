const diceInput = document.getElementById('diceSides');
const diceResult = document.getElementById('resultOutput');
const rollDice = document.getElementById('rollDice');
const d4 = document.getElementById('d4');
const d6 = document.getElementById('d6');
const d8 = document.getElementById('d8');
const d10 = document.getElementById('d10');
const d12 = document.getElementById('d12');
const d20 = document.getElementById('d20');


d4.onclick = function rollD4(){
    
    var randomNumber = Math.ceil(Math.random() * 4);
    diceResult.innerText = randomNumber;
    console.log(randomNumber)
}
d6.onclick = function rollD6(){
    var randomNumber = Math.ceil(Math.random() * 6);
    diceResult.innerText = randomNumber;
    console.log(randomNumber)
}
d8.onclick = function rollD8(){
    var randomNumber = Math.ceil(Math.random() * 8);
    diceResult.innerText = randomNumber;
    console.log(randomNumber)
}
d10.onclick = function rollD10(){
    
    var randomNumber = Math.ceil(Math.random() * 10);
    diceResult.innerText = randomNumber;
    console.log(randomNumber)
}
d12.onclick = function rollD12(){
    
    var randomNumber = Math.ceil(Math.random() * 12);
    diceResult.innerText = randomNumber;
    console.log(randomNumber)
}
d20.onclick = function rollD20(){
    
    var randomNumber = Math.ceil(Math.random() * 20);
    diceResult.innerText = randomNumber;
    console.log(randomNumber)
}