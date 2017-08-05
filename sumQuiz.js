/* Define Global Variables */
var a, b, result, closeResult, isCorrect;

/* Welcome Screen */
var welcomeScreen = document.getElementById('welcomeScreen');
var startButton = document.getElementById('start');

/* Reset Screen  */
var resetScreen = document.getElementById('resetScreen');
var finalScoreDisplay = document.getElementById('finalScore');
var restartButton = document.getElementById('restart');

/* Run Screen */
var runScreen = document.getElementById('runScreen');
var expressionDisplay = document.getElementById('expression');
var resultDisplay = document.getElementById('result');
var checkButton = document.getElementById('check');
var crossButton = document.getElementById('cross');
//progress bar
var bar = document.querySelector('.progress-bar');

/* Current Score */
//var score = 15129;
var score = 0;
var currentScoreDisplay = document.querySelector('#currentScore p');

/* Number Generator 1-10 */
function oneThroughTen(){
  return Math.floor(Math.random() * 10 ) + 1;
}

/* Generate Number in Close Range of Input x */
function closeNum(x){
  var negOrPos = Math.round(Math.random()) ? -1 : 1;
  var absRange = Math.floor(x/2);
  return (negOrPos * (Math.floor(Math.random() * absRange) + 1)) + x;
}

/* Create Math Expression */
function createExpression(){
  a = oneThroughTen();
  b = oneThroughTen();
  result = a + b;

  isCorrect = Math.round(Math.random()) ? true : false;
  closeResult = closeNum(result);
  return a, b, result, closeResult, isCorrect;
}

function displayExpression(){
  // var expr = createExpression();
  // var a = expr.a;
  // var b = expr.b;
  // var result = expr.result;
  // var closeResult = expr.closeResult;
  // var isCorrect = expr.isCorrect;

  expressionDisplay.textContent = a + " + " + b;
  if(isCorrect){
    resultDisplay.textContent = "= " + result;
  } else {
    resultDisplay.textContent = "= " + closeResult;
  }
  currentScoreDisplay.textContent = "Score: " + score;
}

function displayProgressBar(){
  // if(on === true){
  //   bar.classList.add('runProgress');
  // } else {
  //   bar.classList.remove('runProgress');
  // }
  //
  // if(bar.className = " "){
  if(bar.className === "progress-bar"){
    //bar.className = "progress-bar";
    bar.classList.add("runProgress");
  } else {
    //bar.className = " ";
    bar.className = "progress-bar";
    window.setTimeout(function(){
      // bar.className = "progress-bar";
      bar.classList.add("runProgress");
    },100);
  }
}

function reset(){
  welcomeScreen.style.display = "none";
  resetScreen.style.display = "block";
  runScreen.style.display = "none";
  currentScoreDisplay.style.display = "none";
  finalScoreDisplay.textContent = score;
  //reset score
  score = 0;
  currentScoreDisplay.textContent = "Score: " + score;
}

function runTurn(){
  createExpression();
  displayExpression();
  //progress bar
  displayProgressBar();
}

startButton.addEventListener("click", function(){
  runGame();
});

checkButton.addEventListener("click", function(){
  if(isCorrect){
    score += 1;
    runTurn();
    console.log("Keep Going");
  } else {
    reset();
    console.log("Wrong");
  }
});

crossButton.addEventListener("click", function(){
  if(!isCorrect){
    score += 1;
    runTurn();
    console.log("Keep Going");
  } else {
    reset();
    console.log("Wrong");
  }
});

restartButton.addEventListener("click", function(){
  runTurn();
  welcomeScreen.style.display = "none";
  resetScreen.style.display = "none";
  runScreen.style.display = "block";
  currentScoreDisplay.style.display = "block";
});

//progress bar
bar.addEventListener('animationend', function(){
    bar.className = "progress-bar"; //displayProgressBar(false);
    reset();
});

function runGame(){
  runTurn();
  welcomeScreen.style.display = "none";
  resetScreen.style.display = "none";
  runScreen.style.display = "block";
  currentScoreDisplay.style.display = "block";
}
