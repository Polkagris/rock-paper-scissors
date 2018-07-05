const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const win = document.getElementById('win');
const lose = document.getElementById('lose');

function game(usersHand){
  const computersHand = computer();
  console.log("This is the users hand: " + usersHand);
  console.log("This is the computers hand: " + computersHand);

function compare(usersHand, computersHand){
  let answer = "";
    switch(usersHand + computersHand){
      case("rr"):
      case("ss"):
      case("pp"):
        answer = "DRAW!";
        break;
      case("rs"):
      case("sp"):
      case("pr"):
        answer = "WIN!";
        break;
      case("rp"):
      case("sr"):
      case("ps"):
        answer = "LOSE!";
        break
      default:
      answer = "something else";
      break;
    }
    return answer;
}
  console.log(compare(usersHand, computersHand));
  if(compare(usersHand, computersHand) == "WIN!"){
    console.log("WE HAVE A WINNER!");
    win.innerHTML = parseInt(win.innerHTML) + 1;
} else if (compare(usersHand, computersHand) == "LOSE!"){
  lose.innerHTML = parseInt(lose.innerHTML) + 1;
}

}


//on click return value of r,p or s
rock.addEventListener('click', function(){
   game("r");
});
paper.addEventListener('click', function(){
  game("p");
});
scissors.addEventListener('click', function(){
  game("s");
});

//random function for computers choice 0-2, runs after click
function computer(){
  let randomNum = Math.floor(Math.random() * 3);
  let letterArr = ["r", "p", "s"];
  return letterArr[randomNum];
}

//compare computers choice with users choice




//if win or lose increment scoreBoard
//reset button
//background when win
//background when lose
