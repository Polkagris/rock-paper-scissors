const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const win = document.getElementById('win');
const lose = document.getElementById('lose');

//on click return value of r,p or s
rock.addEventListener('click', function(){
  return "r";
});
paper.addEventListener('click', function(){
  return "p";
});
scissors.addEventListener('click', function(){
  return "s";
});

//random function for computers choice 0-2, runs after click
function computer(choice){
  let randomNum = Math.floor(Math.random() * 3);
  let letterArr = ["r", "p", "s"];
  return letterArr[randomNum];
}
console.log(computer());
console.log(roc());
let computerCoice = computer();

//compare computers choice with users choice
  if(paper == computerCoice){
    console.log("TIE!!!!");
  }



//if win or lose increment scoreBoard
//reset button
//background when win
//background when lose
