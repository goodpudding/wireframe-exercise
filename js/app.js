'use strict';
let playersScore = 0;


//Welcome message
function getName(username) {
  alert('Hello!');
  username = prompt('What is your name?');
  alert('Hi there, ' + username + '. Lets play a little game.');
  return username;
}


// Question 1
function q1(question1) {
  question1 = prompt('Did I grow up in Alaska').toLowerCase();
  if (question1 === 'yes' || question1 === 'y') {
    alert('You\'re Right!');
    return playersScore += 1;
  }
  else {
    alert('Incorrect');
  }
}


// Question 2
function q2(question2) {
  question2 = prompt('Did I complete my degree', 'y/n, Yes/No').toLowerCase();
  if (question2 === 'yes' || question2 === 'y') {
    alert('You\'re Right!');
    return playersScore++;
  }
  else {
    console.log('Incorrect');
  }
}



// Question 3
function q3(question3) {
  question3 = prompt('Have I lived in more than 5 states?', 'y/n, Yes/No').toLowerCase();
  if (question3 === 'yes' || question3 === 'y') {
    alert('You\'re Right!');
    return playersScore++;
  }
  else {
    alert('Incorrect');
  }
}


// Question 4
function q4(question4) {
  question4 = prompt('Did I graduate in 2011?', 'y/n, Yes/No').toLowerCase();
  if (question4 === 'n' || question4 === 'no') {
    alert('You\'re Right!');
    return playersScore++;
  }
  else {
    alert('Incorrect');
  }
}


// Question 5
function q5(question5) {
  question5 = prompt('Are cats my favorite animals?', 'y/y, Yes/Yessssssss').toLowerCase();
  if (question5 === 'yes' || question5 === 'y') {
    alert('You\'re Right!');
    return playersScore++;
  }
  else {
    alert('Incorrect');
  }
}


// Question 6
let question6 = 0;
function q6(answer6 = 9) {
  for (let i = 4; i > 0; i--) {
    question6 = parseInt(prompt(`I'm thinking of a number between 1-10. Can you guess which number?`, `Get 4 attempts.`));
    if (question6 === answer6) {
      alert('You\'re Right!');
      return playersScore++;
    }
    else if (i === 0 && question6 != answer6) {
      alert('I\'m sorry, you\'re all out of attempts.');
    }
    else if (question6 > answer6) {
      alert('Dang, Close. You\'re high.');
    }
    else if (question6 < answer6) {
      alert('Dang, Close. You\'re low.');
    }
    else if (question6 === '') {
      alert('That\'s not a number. We programmer nerds call that a string.');
    }
    else if (question6 > 10 || question6 < 1) {
      alert('No silly! Pick a number between 1-10');
    }
  }
}


// Question 7
function q7(possibleAnswers = [1, 2, 3, 4, 5, 6], totalTurns = 6) {
  let turns = 0;
  while (turns < totalTurns) {
    if (turns != 0) {
      alert(`Try again`);
    }
    let arrayAnswers = +prompt(`Give me numbers 1-6`);
    for (let j = 0; j < possibleAnswers.length; j++) {
      if (arrayAnswers === possibleAnswers[j]) {
        alert(`You're right! You have ${5 - turns} guesses left.`)
        return playersScore += 1;
      }
    }
    turns++;
  }
}


// Function for Questions
function questionGame() {
  getName();
  q1();
  q2();
  q3();
  q4();
  q5();
  q6();
  q7();
}
// questionGame();
// alert(`You scored ${playersScore} of 7 points. Not too bad!`);
