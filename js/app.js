'use strict';
alert('Hello!');
let username = prompt('What is your name?');
alert('Hi there, ' + username + '. Lets play a little game.');
let playersScore = 0;

// Question 1
let question1 = prompt('Did I grow up in Alaska').toLowerCase();
if (question1 === 'yes' || question1 === 'y') {
  //console.log('You\'re Right!');
  alert('You\'re Right!');
  playersScore + 1;
}
else {
  //console.log('Incorrect');
  alert('Incorrect');
}

// Question 2
let question2 = prompt('Did I complete my degree', 'y/n, Yes/No').toLowerCase();
if (question2 === 'yes' || question2 === 'y') {
  //console.log('You\'re Right!');
  alert('You\'re Right!');
  playersScore++;
}
else {
  console.log('Incorrect');
}
console.log('test6666');
// Question 3
let question3 = prompt('Have I lived in more that 5 states?', 'y/n, Yes/No').toLowerCase();
if (question3 === 'yes' || question3 === 'y') {
  //console.log('You\'re Right!');
  alert('You\'re Right!');
  playersScore++;
}
else {
  //console.log('Incorrect');
  alert('Incorrect');
}

// Question 4
let question4 = prompt('Did I graduate in 2011?', 'y/n, Yes/No').toLowerCase();
if (question4 === 'n' || question4 === 'no') {
  //console.log('You\'re Right!');
  alert('You\'re Right!');
  playersScore++;
}
else {
  //console.log('Incorrect');
  alert('Incorrect');
}

// Question 5
let question5 = prompt('Are cats my favorite animals?', 'y/y, Yes/Yessssssss').toLowerCase();
if (question5 === 'yes' || question5 === 'y') {
  //console.log('You\'re Right, ' + username);
  alert('You\'re Right!');
  playersScore++;
}
else {
  //console.log('Incorrect, ' + username);
  alert('Incorrect');
}

// Question 6
let question6 = 0;
question6 = prompt(`I'm thinking of a number between 1-10. Can you guess which number?`, `Get 4 attempts.`)
let answer6 = 9;
console.log('test1');
for (let i = 4; i > 0; i--) {
  if (question6 === answer6) {
    alert('You\'re Right!');
    playersScore++;
    console.log('test2');
  } else if (i === 0 && question6 != answer6) {
    alert('I\'m sorry, you\'re all out of attempts.');
  }
  else if (question6 > answer6) {

    alert('Dang, Close. You\'re high.');
    question6 = prompt(`Can you guess which number?`, `You have ${i} attempts left.`);
  }
  else if (question6 < answer6) {
    alert('Dang, Close. You\'re low.');
    question6 = prompt(`Can you guess which number?`, `You have ${i} attempts left.`);
  }
  else if (question6 === '') {
    alert('That\'s not a number. We programmer nerds call that a string.');
    question6 = prompt(`Can you guess which number?`, `You have ${i} attempts left.`);
  }
  else if (question6 > 10 || question6 < 1) {
    alert('No silly! Pick a number between 1-10');
    question6 = prompt(`Can you guess which number?`, `You have ${i} attempts left.`);
  }
}


// Question 7

let possibleAnswers = [1, 2, 3, 4, 5, 6];
let success = false;
let totalTurns = 6;
let turns = 0;
while (success === false || turns === totalTurns) {
  if (turns != 0) {
    alert(`incorrect, try again`);
  }
  let arrayAnswers = +prompt(`Give me numbers 1-6`);
  for (let j = 0; j < possibleAnswers.length; j++) {
    if (arrayAnswers === possibleAnswers[j]) {
      alert(`You're right! You have ${5 - turns} guesses left.`)
      success = true;
    }
  }
  turns++;
}
alert(`You scored ${playersScore} of 7 points. Not too bad, ${username}.`);
