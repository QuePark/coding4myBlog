let myPop = function (arr) {
  if ( !Array.isArray(arr) ) {
    return 'ERROR: Parameter must be an array.\n'
  }
  let newArr = [];
  for ( let i = 0; i < arr.length-1; i++ ) {
    newArr[i] = arr[i];
  }
  return newArr;
}
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// [1, 2, 3, 4, 5]
arr = myPop(arr);
console.log(arr);
// [1, 2, 3, 4]