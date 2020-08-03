let myUnshift = function (arr, element) {
  if ( !Array.isArray(arr) ) {
    return 'ERROR: First parameter must be an array.\n'
  }
  let newArr = [];
  for ( let i = 1; i <= arr.length; i++) {
    newArr[i] = arr[i-1];
  }
  newArr[0] = element;
  return newArr;
}
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// [1, 2, 3, 4, 5]
arr = myUnshift(arr, 0);
console.log(arr);
// [0, 1, 2, 3, 4, 5]