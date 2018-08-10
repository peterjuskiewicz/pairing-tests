const slot1 = document.getElementById('first');
const slot2 = document.getElementById('second');
const slot3 = document.getElementById('third');
const slot4 = document.getElementById('fourth');

const slotArray = [slot1, slot2, slot3, slot4];

const colorArray = ['black', 'white', 'blue', 'yellow'];
// const colorArray = ['black', 'black', 'black', 'black'];

let jackpotValue = 1000;

const cashToWin = document.createElement('P');
cashToWin.innerText = `you can win ${jackpotValue}$`

const message = document.createElement('P');

document.getElementById('interaction').appendChild(cashToWin);
document.getElementById('interaction').appendChild(message);



const playGame = () => {

  let jackpotArray = [];

  for(let i = 0; i < slotArray.length; i++) {

    let randomNumber = Math.round(Math.random() * 3);

    slotArray[i].style.backgroundColor = colorArray[randomNumber];

    jackpotArray.push(colorArray[randomNumber]);

  }

  if(jackpotArray.reduce(function(a, b){ return (a === b) ? a : false; })){

    message.innerText = 'you won ' + jackpotValue + '$'

  }else{
    message.innerText = 'try again to win'

  }

}