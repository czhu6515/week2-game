let  readlineSync  =  require('readline-sync');

// sleep function
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

// main game
console.log( "Welcome to Batman: Arkham Asylum!" );

// sleep(1000)
//
// console.log( "What do you want to do?" )
//
// let option = readlineSync.question( "Options: look around, smack a prisoner, run away:" );
//
// switch(option) {
//   case "look around":
//     console.log( "You see a bunch of angry prisoners and the Joker!" );
//     break;
//   case "smack a prisoner":
//     console.log( "Ouch! What did I ever do to you, man?" );
//     break;
//   case "run away":
//     console.log( "Batman: \"Bats can't run.\"" );
//     break;
//   default:
//     console.log( "A prisoner punches you in the face." );
//     console.log( "Prisoner: \"Quit messin' around.\"" );
// }

sliderGame()
// slider game

function sliderGame () {
  let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let answer = Math.floor(Math.random() * 31)
  // let leftKey = &#97;
  console.log(`Quick, select ${answer}!`);

  let slider = require('readline-sync'), MAX = 60, MIN = 0, value = 30, key;
  console.log('\n\n' + (new Array(20)).join(' ') + '[Z] <- -> [X]  SELECT: [SPACE]\n');
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
  console.log('\nA value the user requested: ' + value);

  if (value === answer){
    console.log('Good Job!');
  } else {
    console.log(`Off by ${value-answer}! Try again!`);
  }
}
