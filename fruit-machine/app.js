const slot1 = document.getElementById('first');
const slot2 = document.getElementById('second');
const slot3 = document.getElementById('third');
const slot4 = document.getElementById('fourth');

const slotArray = [slot1, slot2, slot3, slot4];

const colorArray = ['black', 'white', 'blue', 'yellow'];
// const colorArray = ['black', 'black', 'black', 'black'];

let playerMoney = 100;

let jackpotValue = 1000;

const cashToWin = document.createElement('P');
cashToWin.innerText = `you can win ${jackpotValue}$`

const message = document.createElement('P');

document.getElementById('interaction').appendChild(cashToWin);
document.getElementById('interaction').appendChild(message);



const playGame = () => {

  if(playerMoney < 10){
    message.innerText = 'you run out of money';
    return;
  }

  let jackpotArray = [];

  for(let i = 0; i < slotArray.length; i++) {

    let randomNumber = Math.round(Math.random() * 3);

    slotArray[i].style.backgroundColor = colorArray[randomNumber];

    jackpotArray.push(colorArray[randomNumber]);

  }

  if(jackpotArray.reduce(function(a, b){ return (a === b) ? a : false; })){

    message.innerText = 'you won ' + jackpotValue + '$'

    playerMoney += jackpotValue;
    jackpotValue = 0;
    cashToWin.innerText = `you can win ${jackpotValue}$`

  }else{
    message.innerText = `try again to win, you have ${playerMoney}$ left`
    jackpotValue += 10;
    playerMoney -= 10;
    cashToWin.innerText = `you can win ${jackpotValue}$`

  }

}