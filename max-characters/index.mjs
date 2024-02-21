// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  const charCount = {};
  let maxChar = "";
  let maxCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
  }
  console.log(charCount);
  for (const character in charCount) {
    if (charCount[character] > maxCount) {
      maxChar = character;
      maxCount = charCount[character];
    }
  }

  return maxChar;
};

console.log(getMaxCharacters("abcccccccd"));
console.log(getMaxCharacters("apple 1231111"));
