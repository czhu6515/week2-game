let readlineSync = require('readline-sync');

// sleep function
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

// countdown timer
function checkAnswer(ans, seconds) {
  let checker = () => {
    console.log(seconds);
    seconds--;
    if (seconds <= 0 || ans != undefined) {
        clearInterval(check);
    }
  }
  checker()
  let check = setInterval(checker, 1000);
}




console.log('Welcome to JS Hero!');
// sleep(2000)

console.log('Just follow the directions and have fun!');

// sleep(10000)

async function mainGame(){

  await wordGame()
  // startTimer(10);
  // sleep(200)
  sliderGame()
  // console.log('before');
  // let userAnswer
  // checkAnswer(userAnswer, 10)
  // sleep(3000)
  // console.log('after');
  mathGame()
  qpGame()
}

mainGame()

function sliderGame () {

  let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let answer = Math.floor(Math.random() * 61)
  // let leftKey = &#97;
  console.log();
  console.log();
  console.log(`Move the slider, select ${answer}!                     [Z] <- -> [X]  `);
  console.log(`                                               SELECT: [SPACE]`);


  let slider = require('readline-sync'), MAX = 60, MIN = 0, value = 30, key;
  console.log('\n\n\n');

  while (true) {
    console.log('\x1B[1A\x1B[K|' +
      (new Array(value + 1)).join('-') + 'O' +
      (new Array(MAX - value + 1)).join('-') + '| ' + value);
    key = readlineSync.keyIn('',
      {hideEchoBack: true, mask: '', limit: 'zx '});
    if (key === 'z') { if (value > MIN) { value--; } }
    else if (key === 'x') { if (value < MAX) { value++; } }
    else { break; }
  }

  console.log('\nYou selected: ' + value);

  if (value === answer){
    console.log();
    console.log('You\'re Awesome!');
  } else {
    console.log();
    console.log(`Off by ${value-answer}! You suck!`);
  }
  sleep(5000)
}

function wordGame () {
  word = ['sweaterdress', 'cakewalking', 'pseudoscience', 'whatthefuck', 'jellybelly', 'yumminess',
  'abolitionism', 'Wyncode', 'tomato-juice', 'hypothesize', 'JavaScript', 'Delicious', 'Googling' ]
  console.log();
  console.log();
  // console.log("THE PASSWORD");
  console.log();
  console.log('Enter the following secret password! (Case-sensitive)')
  console.log();

  selection = word[Math.floor(Math.random() * word.length)]
  console.log("Password:" + selection);
  let secret = readlineSync.question(">>  ", {hideEchoBack: true})
  console.log(`You entered ${secret}`);

  if (secret === selection){
    console.log();
    console.log("You're awesome!");
  } else {
    console.log();
    console.log("You suck!");
  }
  sleep(5000)
}

function mathGame() {

  console.log();
  console.log();
  console.log('Answer this math question!')
  console.log();
  let a = Math.floor(Math.random() * 100)
  let b = Math.floor(Math.random() * 100)

  console.log(`What is ${a} + ${b}?`);


  userAnswer = readlineSync.question(">>  ")
  let realAnswer = a + b

  // console.log(userAnswer, realAnswer);
  if (userAnswer == realAnswer){
    console.log();
    console.log("You're awesome!")
  } else {
    console.log();
    console.log("You suck!");
  }
  sleep(5000)
}

function qpGame () {
  console.log();
  console.log();
  console.log("Enter this string of q's and p's")
  console.log();
  qpArr = []
  for(let i = 0; i <= 14; i++){
    coinFlip = Math.round(Math.random())
    if (coinFlip === 0) {
      qpArr.push('q')
    } else {
      qpArr.push('p')
    }
  }
  let qpStr = qpArr.join('')
  console.log(qpStr);

  let userAnswer = readlineSync.question(">>  ")

  // console.log(userAnswer, qpStr);
  if (userAnswer == qpStr){
    console.log();
    console.log("You're awesome!")
  } else {
    console.log();
    console.log("You suck!");
  }
  sleep(5000)
}
