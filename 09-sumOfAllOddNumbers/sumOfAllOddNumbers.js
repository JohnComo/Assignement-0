function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let evens = 0;
  for ( var i = 0; i < nums.length; i++){
  if (nums[i] % 2 == 1)
  evens++
  }
  return evens
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
