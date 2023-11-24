var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    startGame();
  }
});

$('.btn').on('click', function () {
  handleButtonClick($(this).attr('id'));
});

function startGame() {
  $('#level-title').text('Level ' + level);
  nextSequence();
  started = true;
}

function handleButtonClick(userChosenColor) {
  userClickedPattern.push(userChosenColor);
  playSounds(userChosenColor);
  buttonAnimation('#' + userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $('#level-title').text('Level ' + level);

  var randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomChosenColor);

  $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSounds(randomChosenColor);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    handleWrongAnswer();
  }
}

function handleWrongAnswer() {
  playSounds('wrong');
  $('body').addClass('game-over');
  setTimeout(() => {
    $('body').removeClass('game-over');
  }, 200);

  $('#level-title').text('Game Over, Press Any Key to Restart');
  startOver();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function playSounds(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function buttonAnimation(currentButton) {
  $(currentButton).addClass('pressed');
  setTimeout(function () {
    $(currentButton).removeClass('pressed');
  }, 100);
}




// var buttonColors = ['red', 'blue', 'green', 'yellow']
// var gamePattern = []
// var userClickedPattern = []

// var started = false
// var level = 0

// $(document).keypress(function () {
//   if (!started) {
//     $('#level-title').text('Level ' + level)
//     nextSequence()
//     started = true
//   }
// })

// // Button Click
// $('.btn').on('click', function () {
//   var userChosenColor = $(this).attr('id')
//   userClickedPattern.push(userChosenColor)
//   console.log(userClickedPattern)

//   playSounds(userChosenColor)
//   buttonAnimation('#' + userChosenColor) // Adding '#' to form a valid selector

//     checkAnswer(userClickedPattern.length -1)
    
//   //   makeSound(userChosenColor)
// })

// function nextSequence() {
//   userClickedPattern = []

//   level++
//   $('#level-title').text('Level ' + level)

//   var randomNumber = Math.floor(Math.random() * 4)
//   var randomChosenColor = buttonColors[randomNumber]
//   gamePattern.push(randomChosenColor)

//   $('#' + randomChosenColor)
//     .fadeIn(100)
//     .fadeOut(100)
//     .fadeIn(100)

//   var audio = new Audio('./sounds/' + randomChosenColor + '.mp3')
//   audio.play()

//   console.log(gamePattern)
// }

// function checkAnswer(currentLevel) {
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     console.log('Success')

//     if (userClickedPattern.length === gamePattern.length) {
//       setTimeout(function () {
//         nextSequence()
//       }, 1000)
//     }
//   } else {
//     var audio = new Audio('./sounds/wrong.mp3')
//     audio.play()

//     $('body').addClass('game-over')
//     setTimeout(() => {
//       $('body').removeClass('game-over')
//     }, 200);

//     $('#level-title').text('Game Over, Press Any Key to Restart')
//     startOver()

//     console.log('Wrong')
//   }
// }

// function startOver() {
//   level = 0
//   gamePattern = []
//   started = false
// }


// function playSounds(name) {
//   var audio = new Audio('sounds/' + name + '.mp3')
//   audio.play()
// }

// function buttonAnimation(currentButton) {
//   $(currentButton).addClass('pressed')
//   setTimeout(function () {
//     $(currentButton).removeClass('pressed')
//   }, 100) // You may adjust the timeout value as needed
// }

//   $(document).on('keypress', function (event) {
//     var keyKeys = event.key.toLowerCase()

//     //console.log(keyKeys)
//   })

// function makeSound(buttonId) {
//   switch (buttonId) {
//     case 'green':
//       playSounds('./sounds/green.mp3')
//       break
//     case 'yellow':
//       playSounds('./sounds/yellow.mp3')
//       break
//     case 'blue':
//       playSounds('./sounds/blue.mp3')
//       break
//     case 'red':
//       playSounds('./sounds/red.mp3')
//       break
//     default:
//       break
//   }
// }
