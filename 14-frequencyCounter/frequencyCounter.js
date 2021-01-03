function frequencyCounter(word) {
  // Insert code here;
  var freq = {}
  for (var i = 0; i < word.length < i++){
  var character = word.charAt(i);
    if (freq[character])
      freq[character]++
    else
      freq[character]--
    }
    return freq
}

// Do not edit this line;
module.exports = frequencyCounter;
