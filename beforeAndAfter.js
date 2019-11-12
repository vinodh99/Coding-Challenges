// Given a list of phrases, generate a list of Wheel of Fortune "Before and After" puzzles.
// "Before and After" puzzles are where one phrase ends with the last word of the first word of another.
// Input:
// writing code
// code rocks
// Output
// writing code rocks

// Input
// mission statement
// a quick bite to eat
// a chip off the old block
// chocolate bar
// mission impossible
// a man on a mission
// block party
// eat my words
// bar of soap

// Output
// a quick bite to eat my words
// a chip off the old block party
// chocolate bar of soap
// a man on a mission statement
// a man on a mission impossible

const beforeAndAfter = arr => {
  let firstWords = {};
  let lastWords = {};

  arr.forEach(phrase => {
    let phraseSplit = phrase.split(" ");
    let firstWord = phraseSplit[0];
    let lastWord = phraseSplit[phraseSplit.length - 1];

    if (firstWords[firstWord]) {
      firstWords[firstWord].push(phrase);
    } else {
      firstWords[firstWord] = [phrase];
    }

    if (lastWords[lastWord]) {
      lastWords[lastWord].push(phrase);
    } else {
      lastWords[lastWord] = [phrase];
    }
  });
  let result = [];

  for (let [key, value] of Object.entries(lastWords)) {
    if (firstWords[key]) {
      for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < firstWords[key].length; j++) {
          result.push(
            value[i] +
              " " +
              firstWords[key][j]
                .split(" ")
                .slice(1)
                .join(" ")
          );
        }
      }
    }
  }
  return result;
};

console.log(
  beforeAndAfter([
    "mission statement",
    "a quick bite to eat",
    "a chip off the old block",
    "chocolate bar",
    "mission impossible",
    "a man on a mission",
    "block party",
    "eat my words",
    "bar of soap"
  ])
);
