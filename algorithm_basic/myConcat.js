let myConcat = function (a, b) {
  if ( !Array.isArray(a) || !Array.isArray(b) ) {
    return 'ERROR: First parameter must be an array.\n'
  }
  let newArr = a.slice();

  for ( let i = 0; i < b.length; i++ ) {
    newArr[a.length + i] = b[i];
    console.log(newArr);
  }

  return newArr;
}
let a = [1, 2, 3];
let b = [4, 5];
console.log(a);
// [1, 2, 3]
console.log(b);
// [4, 5]
let arr = myConcat(a, b);
console.log(arr);
// [1, 2, 3, 4, 5]