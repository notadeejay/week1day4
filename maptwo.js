var words = ["ground", "control", "to", "major", "tom"];


function map (arr, lengthOfWord) {
  var wordLength = []; //create new array to store the length of the word
  for (var i = 0; i < arr.length; i++) { //loop through the given array
    wordLength.push(arr[i].length); //push the length of each word to a new array
  }
  console.log(wordLength);
}

map(words, function(word) {
  return word.length;
});

