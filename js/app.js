'use strict';
alert('Hello!');
let username = prompt('What is your name?');
alert ('Hi there, ' + username + '. Lets play a little game.');
let question1 = prompt('Did I grow up in Alaska').toLowerCase();
if (question1 === 'yes' || question1 === 'y') {
  //console.log('You\'re Right!');
  alert('You\'re Right!');
}
else{
  //console.log('Incorrect');
  alert('Incorrect');
}
let question2 = prompt('Did I complete my degree','y/n, Yes/No').toLowerCase();
if (question2 === 'yes' ||question2 === 'y') {
  //console.log('You\'re Right!');
  alert('You\'re Right!');
}
else{
  console.log('Incorrect');
}
let question3 = prompt('Have I lived in more that 5 states?','y/n, Yes/No').toLowerCase();
if (question3 === 'yes' ||question3 === 'y') {
  //console.log('You\'re Right!');
  alert('You\'re Right!');
}
else{
  //console.log('Incorrect');
  alert('Incorrect');
}
let question4 = prompt('Did I graduate in 2011?','y/n, Yes/No').toLowerCase();
if(question4 === 'n' || question4 === 'no') {
  //console.log('You\'re Right!');
  alert('You\'re Right!');
}
else{
  //console.log('Incorrect');
  alert('Incorrect');
}
let question5 = prompt('Are cats my favorite animals?','y/y, Yes/Yessssssss').toLowerCase();
if(question5 === 'yes' || question5 === 'y') {
  //console.log('You\'re Right!');
  alert('You\'re Right!');
}
else{
  //console.log('Incorrect');
  alert('Incorrect');
}







