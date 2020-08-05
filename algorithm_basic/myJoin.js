// 배열을 문자열로 변환시켜준다. 사이에 원하는 값을 넣을 수 있다.
let myJoin = function (arr, value) {
  if ( !Array.isArray(arr) ) {
    return 'ERROR: First parameter must be an array.\n'
  }
  if ( value === undefined ) {
    value = ',';
  }
  let result = '';
  result += arr[0];
  for ( let i = 1; i < arr.length; i++ ) {
    result += `${value}${arr[i]}`;
  }
  return result;
}

let arr = [1, 2, 3, 4, 5, 6];
let result = myJoin(arr, ' ');
console.log(arr);
// [ 1, 2, 3, 4, 5, 6 ]
console.log(`'${result}'`);
// '1 2 3 4 5 6'