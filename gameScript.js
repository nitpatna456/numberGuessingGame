let randmNum = parseInt(Math.random() * 100 +1);
const userInput =document.querySelector('#guessFeild');
const submit = document.querySelector('#sbt');
const showGuess = document.querySelector('.showGess');
const remainGuess = document.querySelector('.remainGess');
const lowOrhi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultPara');
const para = document.createElement('p');

let playgame = true;
let numGuess = 1;
let prevGuess=[];

 if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
      alert(`Please enter a valid number`);
    }else if(guess<1){
         alert(`Please enter number more than 1`);
    }else if(guess>100){
         alert(`Please enter number less than 100`);
    }else{
     prevGuess.push(guess);
     if(numGuess >= 10){
        cleanup(guess);
        displayMessage(`game over. your number was ${randmNum}`)
        endgame();
     }else{
        cleanup(guess);
        checkGuess(guess);   
    }
  }
}
function checkGuess(guess){
    if(guess === randmNum){
        displayMessage(`your guess is correct`)
    }if(guess > randmNum){
        displayMessage(`your number is to high`)
    }else if(guess < randmNum){
        displayMessage(`your number is to low`)
    }
}
function displayMessage(message){
      lowOrhi.innerHTML = `<h2>${message}</h2>`
}

function cleanup(guess){
      userInput.value = '';
      showGuess.innerHTML += `${guess} ,`;
      numGuess++;
      remainGuess.innerHTML = `${11-numGuess}`;
}
function endgame(){
    playgame = false ;
    userInput.value = '';
    userInput.setAttribute('disabled','');
    para.classList.add('button');
    para.innerHTML = `<input type="submit" id="newGame" value="start new game">`
    resultParas.appendChild(para);
    newgame();
}

function newgame(){
    const button = document.querySelector('#newGame')
    button.addEventListener('click',(e)=>{
       randmNum = parseInt(Math.random()*100 +1);
       prevGuess = [];
       numGuess = 1;
       showGuess.innerHTML = '' 
       remainGuess.innerHTML = `${11-numGuess}`
       userInput.removeAttribute('disabled');
       resultParas.removeChild(para);
       playgame = true;
    });
}



