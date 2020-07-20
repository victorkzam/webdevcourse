const input = 'Stay Hungry. Stay Foolish.';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(i);
  for (let j = 0; j < vowels.length; j++) {
    // console.log(j);
    if (input[i].toLowerCase() === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  if (input[i].toLowerCase() === 'e' || input[i].toLowerCase() === 'u') {
    resultArray.push(input[i]);
  }
}

console.log(resultArray.join('').toUpperCase());