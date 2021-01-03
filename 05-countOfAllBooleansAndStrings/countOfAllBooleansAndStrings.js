function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let num = 0;
  for ( var i = 0; i < arr.length ; i++){
  if (typeof arr[i] == 'string' || typeof arr[i] == 'boolean')
    num++;
  }
  return num; 
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
