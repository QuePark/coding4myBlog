let myShift = function (arr) {
  if ( !Array.isArray(arr) ) {
    return 'ERROR: First parameter must be an array.\n'
  }
  let newArr = [];
  for ( let i = 1; i < arr.length; i++ ) {
    newArr[i-1] = arr[i];
  }
  return newArr;
}
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// [1, 2, 3, 4, 5]
arr = myShift(arr);
console.log(arr);
// [2, 3, 4, 5]