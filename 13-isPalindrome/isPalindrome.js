function isPalindrome(word) {
  // Insert code here;
  let front = 0
  let end = word.length - 1
  while (front <= end){
  let t1 = word.slice(front, front+1)
  let t2 = word.slice(end, end+1)
  if (t1 != t2)
    return false
  }
  front+=1
  end -=1
return true

}

// Do not edit this line;
module.exports = isPalindrome;
