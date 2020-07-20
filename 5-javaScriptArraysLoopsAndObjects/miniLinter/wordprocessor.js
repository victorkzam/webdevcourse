let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';


let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// My Code
// Split works as a splitter based on the condition of a space between words. This way we can count them
let storyWords = story.split(' ');

// Filter the whole text and remove the unnecessary words
let betterWords = 
storyWords.filter(word => {
  return !unnecessaryWords.includes(word);
});

// Counter of all overused words based on the array
let overusedWordsCounter =
storyWords.filter(word => {
  return overusedWords.includes(word);
});

// Sentence counter based on words ending with '.' or '!'
let sentenceCounter =
storyWords.filter(word => {
  return word.includes('.') + word.includes('!');
});

// Function created to log information on the text
const textInfo = () => {
  console.log(`Word count: ${storyWords.length}`);
  console.log(`Sentence count: ${sentenceCounter.length}`);
  console.log(`There is a total of ${overusedWordsCounter.length} overused words.`);
};

// Log enhanced text and information
console.log(betterWords.join(' '));
console.log(' ');
textInfo();

/*Ideas: 
1. For the overused words, remove it every other time it appears.
2. Write a function that finds the word that appears the greatest number of times.
3. Replaced overused words with something else. */