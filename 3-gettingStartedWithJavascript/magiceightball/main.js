const userName = 'Victor';

if (userName) {
  console.log(`Hello, ${userName}`);  
} else {
  console.log('Please insert your name.');
}

const userQuestion = 'Should I become a developer?';
if (userQuestion) {
  console.log(`${userName} has asked: ${userQuestion}`);  
} else {
  console.log('Please insert a question.');
}

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Please try again.'
}

console.log(`The eight ball answered: ${eightBall}`); 