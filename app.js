const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const win = document.getElementById('win');
const lose = document.getElementById('lose');
const reset = document.getElementById('reset');

function game(usersHand){
  const computersHand = computer();
  console.log("This is the users hand: " + usersHand);
  console.log("This is the computers hand: " + computersHand);

function compare(usersHand, computersHand){
  //compare computers choice with users choice
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
    //return "DRAW!", "WIN!" or "LOSE!"
    return answer;
}
//increment scoreBoard
    console.log(compare(usersHand, computersHand));
    if(compare(usersHand, computersHand) == "WIN!"){
      win.innerHTML = parseInt(win.innerHTML) + 1;
    } else if (compare(usersHand, computersHand) == "LOSE!"){
      lose.innerHTML = parseInt(lose.innerHTML) + 1;
    }
}


//on click return value of r,p or s => to game function
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

reset.addEventListener('click', function(){
   win.innerHTML = parseInt(win.innerHTML) * 0;
   lose.innerHTML = parseInt(lose.innerHTML) * 0;
});


//reset button
//background when win
//background when lose
