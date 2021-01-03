class MySolution{

constructor(){
this.flag = false;
}

binarySearch(nums, target) {
  let mid = Math.floor(nums.length / 2)
  // this is the midpoint of the array, which will eventually cut the number
  // of searches in half

  //base case
  if (nums.length == 1 && nums[0] != target)
    return false

  if (nums[mid] == target)
    return true
  else if ( target < nums[mid]){
  return this.binarySearch ( nums.slice(0,mid), target )
  }
  else if ( target > nums[mid]){
  return this.binarySearch( nums.slice(mid), target)
  }

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
