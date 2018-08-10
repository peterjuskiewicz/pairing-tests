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

  // check if player has enough money to play

  if(playerMoney < 10){
    message.innerText = 'you run out of money';
    return;
  }else{
    playerMoney -= 10;
    jackpotValue +=10;

    // define array to store result
    let jackpotArray = [];

    // get results using random number

    for(let i = 0; i < slotArray.length; i++) {

      let randomNumber = Math.round(Math.random() * 3);

      slotArray[i].style.backgroundColor = colorArray[randomNumber];

      jackpotArray.push(colorArray[randomNumber]);

    }

    // winning prize system

    if(jackpotArray.reduce(function(a, b){ return (a === b) ? a : false; })){
      // all colors identical
      winJackpot();
    }else if (jackpotArray[0] !== jackpotArray[1] && jackpotArray[0] !== jackpotArray[2] && jackpotArray[0] !== jackpotArray[3]) {
      if (jackpotArray[1] !== jackpotArray[2] && jackpotArray[1] !== jackpotArray[3]){
        if(jackpotArray[2] !== jackpotArray[3]){
          // each color is different
          winHalf();
        }
      }
    }else if(jackpotArray[0] === jackpotArray[1] || jackpotArray[0] === jackpotArray[2] ||
      jackpotArray[0] === jackpotArray[3] || jackpotArray[1] === jackpotArray[2] || jackpotArray[1] === jackpotArray[3] ||
      jackpotArray[2] === jackpotArray[3]) {
      // at least 2 identical colors
      win5();
    }else{
      looseGame();
    }
  }
};



const addFloat = () => {
  jackpotValue += Number.parseInt(document.getElementById('float-amount').value);
  cashToWin.innerText = `you can win ${jackpotValue}$`
};

const winJackpot = () => {
  playerMoney += jackpotValue;
  message.innerText = `you won ${jackpotValue}$ and have ${playerMoney}$`

  jackpotValue = 0;
  cashToWin.innerText = `you can win ${jackpotValue}$`
}

const winHalf= () => {
  playerMoney += jackpotValue / 2;
  message.innerText = `you won ${jackpotValue /2 }$ and have ${playerMoney}$`

  jackpotValue /= 2;
  cashToWin.innerText = `you can win ${jackpotValue}$`
};

const win5 = () => {
  if(jackpotValue < 50){
    playerMoney += 50;
    message.innerText = `you won 50$ and have ${playerMoney}$`;

    jackpotValue = 0;
    cashToWin.innerText = `you can win ${jackpotValue}$`;
  }else {
    playerMoney += 50;
    message.innerText = `you won 50$ and have ${playerMoney}$`;

    jackpotValue -= 50;
    cashToWin.innerText = `you can win ${jackpotValue}$`;
  }
};

const looseGame = () => {
  message.innerText = `try again to win, you have ${playerMoney}$ left`;
  cashToWin.innerText = `you can win ${jackpotValue}$`;
  if(playerMoney < 10){
    message.innerText = 'you run out of money'
  }
}