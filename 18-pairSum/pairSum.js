function pairSum(nums, target) {
  // Insert code here;
  let sum = 0;
  if (nums.length < 2)
    throw(error)
  else
    for (var i = 0; i < nums.length; i++){
      for (var n = nums.length; n > -1; n--){
        if (nums[i] + nums[n] == target)
          return true
      }
    }
    return false
}

// Do not edit this line;
module.exports = pairSum;

/* 1) Executing the function should throw an error if the length of `nums` array is 1 or lower
2) Executing the function should not throw an error if the length of `nums` array is 2 or greater
3) The value of your output should be of the `boolean` data type
4) The input array `nums` is not mutated
5) The function should return `false` if no two distinct numbers sum up to `target`
6) The function should return `true` if two distinct numbers sum up to `target`
7) In defending against hard-coding, any and all well-formed arguments will lead to sufficient coverage
of core features and expectations #5 and #6 (**note**: see the respective test suite for more information) */
